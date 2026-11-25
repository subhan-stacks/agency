import { ref, push, set, update, remove, onValue, query, orderByChild } from 'firebase/database';
import { db } from '../firebase.js';
import { blogPosts as defaultBlogPosts } from '../data/site.js';

const POSTS_PATH = 'posts';

export async function createBlogPost(postData) {
  if (!db) throw new Error('Firebase Database is not configured.');
  const postsRef = ref(db, POSTS_PATH);
  const newPostRef = push(postsRef);

  await set(newPostRef, {
    title: postData.title,
    slug: postData.slug,
    category: postData.category,
    excerpt: postData.excerpt,
    content: postData.content,
    author: postData.author || 'Subhan Ahmad',
    readTime: postData.readTime || '5 min read',
    date:
      postData.date ||
      new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    featured: Boolean(postData.featured),
    status: postData.status || 'published',
    createdAt: Date.now(),
  });

  return newPostRef.key;
}

export function updateBlogPost(postId, updates) {
  if (!db) return Promise.reject(new Error('Firebase Database is not configured.'));
  return update(ref(db, `${POSTS_PATH}/${postId}`), {
    ...updates,
    updatedAt: Date.now(),
  });
}

export function deleteBlogPost(postId) {
  if (!db) return Promise.reject(new Error('Firebase Database is not configured.'));
  return remove(ref(db, `${POSTS_PATH}/${postId}`));
}

export async function setFeaturedBlogPost(postId, allPosts) {
  if (!db) throw new Error('Firebase Database is not configured.');
  const target = allPosts.find((p) => p.id === postId);
  const nextFeatured = target ? !target.featured : true;

  await Promise.all(
    allPosts.map((post) =>
      update(ref(db, `${POSTS_PATH}/${post.id}`), {
        featured: post.id === postId ? nextFeatured : false,
        updatedAt: Date.now(),
      })
    )
  );
}

export async function seedDefaultBlogPosts() {
  for (const post of defaultBlogPosts) {
    await createBlogPost({
      title: post.title,
      slug: post.id,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      readTime: post.readTime,
      date: post.date,
      featured: Boolean(post.featured),
      status: 'published',
    });
  }
}

export function subscribeToPublishedPosts(callback, onError) {
  if (!db) {
    callback([]);
    return () => {};
  }
  const postsQuery = query(ref(db, POSTS_PATH), orderByChild('createdAt'));

  return onValue(
    postsQuery,
    (snapshot) => {
      const val = snapshot.val() || {};
      const items = Object.entries(val)
        .map(([id, data]) => ({
          id,
          ...data,
          content: Array.isArray(data.content) ? data.content : [String(data.content || '')],
        }))
        .filter((post) => post.status === 'published')
        .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

      callback(items);
    },
    (error) => {
      if (onError) onError(error);
    }
  );
}

export function subscribeToBlogPosts(onData, onError) {
  if (!db) {
    onData([]);
    return () => {};
  }
  const postsRef = ref(db, POSTS_PATH);
  return onValue(
    postsRef,
    (snapshot) => {
      const val = snapshot.val();
      if (!val) {
        onData([]);
        return;
      }
      const list = Object.entries(val)
        .map(([id, item]) => ({
          id,
          ...item,
          content: Array.isArray(item.content) ? item.content : [String(item.content || '')],
        }))
        .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      onData(list);
    },
    (error) => {
      if (onError) onError(error);
    }
  );
}
