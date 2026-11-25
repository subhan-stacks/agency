import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Plus, Pencil, Trash2, Star, ExternalLink, Check, Copy, Database, LogOut, Lock } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import { auth } from '../firebase.js';
import {
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  setFeaturedBlogPost,
  seedDefaultBlogPosts,
  subscribeToBlogPosts,
} from '../utils/blogStorage.js';

const CATEGORIES = ['AI & Automation', 'SEO & Growth', 'Web & Software', 'Design & Branding'];

const createEmptyForm = () => ({
  title: '',
  category: CATEGORIES[0],
  author: 'Subhan Ahmad',
  date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  readTime: '5 min read',
  featured: false,
  status: 'published',
  excerpt: '',
  contentText: '',
});

export default function Admin() {
  usePageTitle('Blog Admin');
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(createEmptyForm);
  const [editingId, setEditingId] = useState(null);
  const [notice, setNotice] = useState('');
  const [copied, setCopied] = useState(false);

  const showNotice = (msg) => {
    setNotice(msg);
    setTimeout(() => setNotice(''), 3500);
  };

  useEffect(() => {
    if (!auth) {
      setAuthReady(true);
      return;
    }
    const unsubAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    if (!user) return;
    const unsubscribe = subscribeToBlogPosts(
      (list) => {
        setPosts(list);
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        showNotice(`Firebase error: ${err.message}`);
      }
    );
    return () => unsubscribe();
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      setLoggingIn(true);
      await signInWithEmailAndPassword(auth, loginEmail.trim(), loginPassword);
    } catch (err) {
      setLoginError(err.message || 'Invalid credentials');
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.excerpt.trim() || !form.contentText.trim()) {
      showNotice('Please fill in Title, Excerpt, and Content.');
      return;
    }

    const paragraphs = form.contentText
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);

    const slug =
      form.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || `post-${Date.now()}`;

    const postData = {
      title: form.title.trim(),
      slug,
      category: form.category,
      date: form.date.trim() || 'Nov 2026',
      readTime: form.readTime.trim() || '5 min read',
      author: form.author.trim() || 'Subhan Ahmad',
      featured: form.featured,
      status: form.status || 'published',
      excerpt: form.excerpt.trim(),
      content: paragraphs.length > 0 ? paragraphs : [form.contentText.trim()],
    };

    try {
      setSaving(true);
      if (editingId) {
        await updateBlogPost(editingId, postData);
        showNotice('Blog post updated in Firebase!');
      } else {
        const newKey = await createBlogPost(postData);
        showNotice(`New blog post published! (ID: ${newKey})`);
      }
      setForm(createEmptyForm());
      setEditingId(null);
    } catch (err) {
      showNotice(`Failed to save post: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setForm({
      title: post.title || '',
      category: post.category || CATEGORIES[0],
      author: post.author || 'Subhan Ahmad',
      date: post.date || '',
      readTime: post.readTime || '5 min read',
      featured: Boolean(post.featured),
      status: post.status || 'published',
      excerpt: post.excerpt || '',
      contentText: Array.isArray(post.content) ? post.content.join('\n\n') : '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlogPost(id);
      if (editingId === id) {
        setEditingId(null);
        setForm(createEmptyForm());
      }
      showNotice('Blog post deleted from Firebase.');
    } catch (err) {
      showNotice(`Failed to delete: ${err.message}`);
    }
  };

  const handleToggleFeatured = async (id) => {
    try {
      await setFeaturedBlogPost(id, posts);
      showNotice('Featured post updated.');
    } catch (err) {
      showNotice(`Failed to update featured status: ${err.message}`);
    }
  };

  const handleSeedDefaults = async () => {
    try {
      setSaving(true);
      await seedDefaultBlogPosts();
      showNotice('Default blog posts added to Firebase /posts!');
    } catch (err) {
      showNotice(`Failed to seed posts: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(posts, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showNotice('Could not copy to clipboard.');
    }
  };

  return (
    <>
      <section className="page-hero admin-hero">
        <div className="container">
          <span className="eyebrow light">Admin Panel · Firebase RTDB</span>
          <h1>Blog Manager</h1>
          <p>Create, edit, feature, or remove articles stored in Firebase Realtime Database (/posts).</p>
        </div>
      </section>

      <section className="section admin-section">
        {!auth ? (
          <div className="container narrow">
            <div className="card admin-form-card">
              <h2>Firebase Not Configured</h2>
              <p className="blog-excerpt">
                Firebase environment variables were not detected. Move your <code>.env</code> file from <code>src/.env</code> to the project root (<code>agency-react/.env</code>) and restart the dev server.
              </p>
            </div>
          </div>
        ) : !authReady ? (
          <div className="container narrow">
            <div className="card admin-form-card">
              <p className="blog-excerpt">Checking authentication...</p>
            </div>
          </div>
        ) : !user ? (
          <div className="container narrow">
            <div className="card admin-form-card">
              <div className="admin-card-head">
                <h2><Lock size={18} /> Admin Sign In</h2>
              </div>
              <p className="blog-excerpt" style={{ marginBottom: '1.2rem' }}>
                Sign in with your Firebase Authentication admin account to publish, edit, or delete blog posts.
              </p>
              {loginError && <div className="error" style={{ marginBottom: '1rem' }}>{loginError}</div>}
              <form onSubmit={handleLogin}>
                <div className="field">
                  <label htmlFor="admin-login-email">Admin</label>
                  <input
                    id="admin-login-email"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Admin"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="admin-login-password">Password</label>
                  <input
                    id="admin-login-password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block" disabled={loggingIn}>
                  {loggingIn ? 'Signing in...' : 'Sign In to Admin Panel'}
                </button>
              </form>
            </div>
          </div>
        ) : (
        <div className="container admin-layout">
          {/* Editor Form */}
          <div className="card admin-form-card">
            <div className="admin-card-head">
              <h2>{editingId ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
              {editingId && (
                <button
                  type="button"
                  className="btn btn-outline admin-sm-btn"
                  onClick={() => {
                    setEditingId(null);
                    setForm(createEmptyForm());
                  }}
                >
                  Cancel Edit
                </button>
              )}
            </div>

            {notice && <div className="admin-notice" role="status">{notice}</div>}

            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="admin-title">Title</label>
                <input
                  id="admin-title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter article headline..."
                  required
                />
              </div>

              <div className="admin-row-2">
                <div className="field">
                  <label htmlFor="admin-category">Category</label>
                  <select id="admin-category" name="category" value={form.category} onChange={handleChange}>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="admin-author">Author</label>
                  <input id="admin-author" name="author" value={form.author} onChange={handleChange} />
                </div>
              </div>

              <div className="admin-row-2">
                <div className="field">
                  <label htmlFor="admin-date">Date</label>
                  <input id="admin-date" name="date" value={form.date} onChange={handleChange} />
                </div>

                <div className="field">
                  <label htmlFor="admin-readTime">Read Time</label>
                  <input id="admin-readTime" name="readTime" value={form.readTime} onChange={handleChange} />
                </div>
              </div>

              <div className="field">
                <label htmlFor="admin-excerpt">Short Excerpt</label>
                <textarea
                  id="admin-excerpt"
                  name="excerpt"
                  rows="2"
                  value={form.excerpt}
                  onChange={handleChange}
                  placeholder="1-2 sentence summary shown on the blog card..."
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="admin-content">Article Content (separate paragraphs with a blank line)</label>
                <textarea
                  id="admin-content"
                  name="contentText"
                  rows="6"
                  value={form.contentText}
                  onChange={handleChange}
                  placeholder="Write your full article paragraphs here..."
                  required
                />
              </div>

              <label className="admin-checkbox">
                <input
                  type="checkbox"
                  name="featured"
                  checked={form.featured}
                  onChange={handleChange}
                />
                <span>Set as Featured Post</span>
              </label>

              <button type="submit" className="btn btn-primary btn-block" disabled={saving}>
                <Plus size={17} /> {saving ? 'Saving...' : editingId ? 'Save Changes' : 'Publish Blog Post'}
              </button>
            </form>
          </div>

          {/* Posts List */}
          <div className="admin-list-col">
            <div className="admin-list-toolbar">
              <h2>Firebase Posts ({posts.length})</h2>
              <div className="admin-toolbar-actions">
                <Link to="/blog" className="btn btn-outline admin-sm-btn">
                  <ExternalLink size={14} /> View Blog
                </Link>
                <button type="button" className="btn btn-outline admin-sm-btn" onClick={handleCopyJson}>
                  {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy JSON'}
                </button>
                {posts.length === 0 && !loading && (
                  <button
                    type="button"
                    className="btn btn-outline admin-sm-btn"
                    onClick={handleSeedDefaults}
                    disabled={saving}
                  >
                    <Database size={14} /> Seed Defaults
                  </button>
                )}
                <button type="button" className="btn btn-outline admin-sm-btn admin-delete-btn" onClick={handleLogout}>
                  <LogOut size={14} /> Sign Out
                </button>
              </div>
            </div>

            {loading ? (
              <div className="card admin-post-item">
                <p className="blog-excerpt">Loading posts from Firebase...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="card admin-post-item">
                <h3>No posts in Firebase yet</h3>
                <p className="blog-excerpt">
                  Create your first post on the left, or click &ldquo;Seed Defaults&rdquo; to push the starter articles to <code>/posts</code>.
                </p>
              </div>
            ) : (
              <div className="admin-posts-list">
                {posts.map((post) => (
                  <article key={post.id} className="card admin-post-item">
                    <div className="admin-post-meta">
                      <span className="portfolio-tag">{post.category}</span>
                      {post.featured && <span className="blog-featured-badge">Featured</span>}
                      <span className="blog-read-time">{post.date} · {post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="admin-post-actions">
                      <button
                        type="button"
                        className="btn btn-outline admin-sm-btn"
                        onClick={() => handleEdit(post)}
                      >
                        <Pencil size={14} /> Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline admin-sm-btn"
                        onClick={() => handleToggleFeatured(post.id)}
                      >
                        <Star size={14} /> {post.featured ? 'Unfeature' : 'Feature'}
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline admin-sm-btn admin-delete-btn"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
        )}
      </section>
    </>
  );
}
