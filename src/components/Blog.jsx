import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="section-container blog-container">
      <div className="section-header">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="section-line"></div>
      </div>
      <p className="section-subtitle">Read the latest insights and thoughts.</p>

      {loading && <div className="loading-state">Loading blogs...</div>}
      
      {error && <div className="error-state">Failed to load blogs. Please try again later.</div>}

      {!loading && !error && blogs.length === 0 && (
        <div className="empty-state">No blog posts found.</div>
      )}

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            <div className="blog-image-wrapper">
              {blog.image_url ? (
                <img src={blog.image_url} alt={blog.title} className="blog-image" />
              ) : (
                <div className="blog-image-placeholder">No Image</div>
              )}
            </div>
            
            <div className="blog-content">
              <div className="blog-meta">
                <div className="blog-author-avatar">
                  {blog.author ? blog.author.charAt(0).toUpperCase() : 'A'}
                </div>
                <div className="blog-meta-text">
                  <span className="blog-author">{blog.author || 'Anonymous'}</span>
                  <span className="blog-date">
                    Published on {blog.created_at ? formatDate(blog.created_at) : 'Unknown date'}
                  </span>
                </div>
              </div>
              
              <h3 className="blog-post-title">{blog.title}</h3>
              <p className="blog-post-excerpt">{blog.content}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
