import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import { blogs } from '../data/content';
import './Blog.css';

const Blog = () => {
  return (
    <PageLayout title="Blog">
      <div className="section-header">
        <h1 className="text-gradient">Articles</h1>
        <p>Thoughts and tutorials on software development.</p>
      </div>

      <div className="blog-list">
        {blogs.map((blog, index) => (
          <motion.article 
            key={blog.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="blog-card glass-card"
          >
            <div className="blog-image-wrapper">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                <div className="blog-tags">
                  {blog.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <Link to={`/blog/${blog.slug}`}>
                <h2 className="blog-title">{blog.title}</h2>
              </Link>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <Link to={`/blog/${blog.slug}`} className="read-more">
                Read Article →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
};

export default Blog;
