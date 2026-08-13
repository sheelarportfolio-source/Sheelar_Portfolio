import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

const BlogAdmin = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchBlogs();
    }
  }, [isAuthenticated]);

  const fetchBlogs = async () => {
    setIsFetching(true);
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setBlogs(data || []);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return;
    
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      // Refresh the list
      fetchBlogs();
      setMessage('Blog post deleted successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      console.error('Error deleting blog:', err);
      alert('Error deleting blog: ' + err.message);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    if (password === adminPassword) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect password');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author || !content || !imageFile) {
      setMessage('Please fill in all fields and select an image.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // 1. Upload the image to Supabase Storage
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('blog-images')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      // 2. Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      // 3. Save the blog post to Firestore (Supabase Database)
      const { error: insertError } = await supabase
        .from('blogs')
        .insert([
          {
            title: title,
            content: content,
            author: author,
            image_url: publicUrl,
          }
        ]);

      if (insertError) throw insertError;

      setMessage('Blog post added successfully!');
      // Refresh the list
      fetchBlogs();
      setTitle('');
      setAuthor('');
      setContent('');
      setImageFile(null);

    } catch (error) {
      console.error('Error adding document: ', error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-container blog-admin-container">
      <div className="section-header">
        <h2 className="section-title">Blog Admin</h2>
        <div className="section-line"></div>
      </div>
      <p className="section-subtitle">Add a new blog post.</p>

      {!isAuthenticated ? (
        <form onSubmit={handleLogin} className="blog-admin-form" style={{ maxWidth: '400px', margin: '40px auto' }}>
          <div className="form-group">
            <label>Admin Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password to access"
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-btn">Login</button>
          {loginError && <div className="message error" style={{ marginTop: '15px' }}>{loginError}</div>}
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="blog-admin-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            required
            className="form-input file-input"
          />
        </div>

        <div className="form-group">
          <label>Content (Comments/Description)</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content here..."
            required
            rows="6"
            className="form-input"
          ></textarea>
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Publishing...' : 'Publish Blog Post'}
        </button>

        {message && <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>{message}</div>}
        </form>
      )}

      {isAuthenticated && (
        <div className="admin-blogs-list">
          <h3 style={{ color: '#fff', marginTop: '40px', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Manage Existing Blogs</h3>
          {isFetching ? (
            <p style={{ color: '#aaa' }}>Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p style={{ color: '#aaa' }}>No blogs found.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {blogs.map(blog => (
                <li key={blog.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1a1a1a', padding: '15px', borderRadius: '8px', border: '1px solid #333' }}>
                  <div>
                    <h4 style={{ color: '#fff', margin: '0 0 5px 0' }}>{blog.title}</h4>
                    <p style={{ color: '#888', margin: 0, fontSize: '13px' }}>By {blog.author}</p>
                  </div>
                  <button 
                    onClick={() => handleDelete(blog.id)}
                    style={{ background: '#ff3b30', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogAdmin;
