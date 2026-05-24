import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import PageLayout from '../layouts/PageLayout';
import { blogs } from '../data/content';
import './Blog.css';

const ITEMS_PER_PAGE = 10;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalItems = blogs.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageLayout title="Blog">
      <div className="section-header">
        <h1 className="text-gradient">Engineering Articles</h1>
        <p>Technical deep dives, tutorials, and system architecture thoughts.</p>
      </div>

      <div className="blogs-grid">
        {currentBlogs.map((blog, index) => (
          <motion.article
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="blog-card glass-card"
          >
            <div className="blog-image-wrapper">
              <img src={blog.image} alt={blog.title} loading="lazy" />
              <div className="blog-date-badge">
                <Calendar size={12} />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
              </div>
            </div>

            <div className="blog-content">
              <div className="blog-tags">
                {blog.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="tag-badge">
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>

              <Link to={`/blog/${blog.slug}`}>
                <h2 className="blog-title">{blog.title}</h2>
              </Link>

              <p className="blog-excerpt">{blog.excerpt}</p>

              <Link to={`/blog/${blog.slug}`} className="read-more-btn">
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="pagination-numbers">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`pagination-number ${currentPage === i + 1 ? 'active' : ''}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </PageLayout>
  );
};

export default Blog;
