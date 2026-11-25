import { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowRight, X } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { blogPosts as defaultBlogPosts } from '../data/site.js';
import { subscribeToPublishedPosts } from '../utils/blogStorage.js';

const CATEGORIES = ['All', 'AI & Automation', 'SEO & Growth', 'Web & Software', 'Design & Branding'];

export default function Blog() {
  usePageTitle('Blog');
  const [posts, setPosts] = useState(defaultBlogPosts);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeToPublishedPosts(
      (items) => {
        setPosts(items.length > 0 ? items : defaultBlogPosts);
      },
      () => {
        setPosts(defaultBlogPosts);
      }
    );
    return () => unsubscribe();
  }, []);

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const featuredPost = activeCategory === 'All' ? filteredPosts.find((p) => p.featured) : null;
  const gridPosts = featuredPost
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  return (
    <>
      <section className="page-hero blog-hero">
        <div className="container">
          <span className="eyebrow light">Insights &amp; Ideas</span>
          <h1>The Oryn Solution Blog</h1>
          <p>
            Practical guides on web engineering, AI automation, SEO, and digital growth from our team.
          </p>

          <div className="blog-filters" role="tablist" aria-label="Blog categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`portfolio-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-section">
        <div className="container">
          {featuredPost && (
            <Reveal>
              <article className="card blog-featured">
                <div className="blog-featured-meta">
                  <span className="portfolio-tag">{featuredPost.category}</span>
                  <span className="blog-featured-badge">Featured</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p className="blog-excerpt">{featuredPost.excerpt}</p>
                <div className="blog-meta-row">
                  <span><User size={14} /> {featuredPost.author}</span>
                  <span><Calendar size={14} /> {featuredPost.date}</span>
                  <span><Clock size={14} /> {featuredPost.readTime}</span>
                </div>
                <button
                  type="button"
                  className="btn btn-primary blog-read-btn"
                  onClick={() => setSelectedPost(featuredPost)}
                >
                  Read Article <ArrowRight size={16} />
                </button>
              </article>
            </Reveal>
          )}

          <div className="grid grid-3 blog-grid">
            {gridPosts.map((post, i) => (
              <Reveal key={post.id} delay={(i % 3) * 80}>
                <article className="card blog-card">
                  <div className="blog-card-top">
                    <span className="portfolio-tag">{post.category}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="blog-meta-row">
                      <span><User size={13} /> {post.author}</span>
                      <span><Calendar size={13} /> {post.date}</span>
                    </div>
                    <button
                      type="button"
                      className="blog-link-btn"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read more <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedPost && (
        <div
          className="blog-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPost.title}
          onClick={() => setSelectedPost(null)}
        >
          <article className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="blog-modal-close"
              aria-label="Close article"
              onClick={() => setSelectedPost(null)}
            >
              <X size={20} />
            </button>
            <span className="portfolio-tag">{selectedPost.category}</span>
            <h2>{selectedPost.title}</h2>
            <div className="blog-meta-row">
              <span><User size={14} /> {selectedPost.author}</span>
              <span><Calendar size={14} /> {selectedPost.date}</span>
              <span><Clock size={14} /> {selectedPost.readTime}</span>
            </div>
            <div className="blog-modal-body">
              {selectedPost.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </article>
        </div>
      )}

      <CtaBand />
    </>
  );
}
