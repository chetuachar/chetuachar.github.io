import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft } from 'lucide-react';
import PageLayout from '../layouts/PageLayout';
import { blogs } from '../data/content';
import './BlogDetail.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogs.find(b => b.slug === slug);
    setBlog(foundBlog);
  }, [slug]);

  if (!blog) return <PageLayout><p>Loading...</p></PageLayout>;

  return (
    <PageLayout title={blog.title}>
      <article className="blog-detail">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={16} /> Back to Articles
        </Link>
        
        <header className="blog-header">
          <div className="blog-meta">
            <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          </div>
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-tags">
            {blog.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>

        <div className="blog-cover">
          <img src={blog.image} alt={blog.title} />
        </div>

        <div className="markdown-content">
          <ReactMarkdown
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogDetail;
