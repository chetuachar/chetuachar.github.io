import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft } from 'lucide-react';
import PageLayout from '../layouts/PageLayout';
import CodeBlock from '../components/common/CodeBlock';
import { blogs } from '../data/content';
import './BlogDetail.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [headings, setHeadings] = useState([]);

  // Helper to slugify heading text
  const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  useEffect(() => {
    const foundBlog = blogs.find(b => b.slug === slug);
    setBlog(foundBlog);

    if (foundBlog) {
      // Extract headings for TOC
      // Matches # Heading, ## Heading, ### Heading
      const headingRegex = /^(#{1,3})\s+(.*)$/gm;
      const extractedHeadings = [];
      let match;

      while ((match = headingRegex.exec(foundBlog.content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        extractedHeadings.push({
          level,
          text,
          id: slugify(text)
        });
      }
      setHeadings(extractedHeadings);
    }

    // Scroll reveal logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Wait for content to render then observe elements
    const timer = setTimeout(() => {
      // First, observe all elements that already have the 'reveal' class (header, cover)
      const existingReveals = document.querySelectorAll('.reveal');
      existingReveals.forEach(el => observer.observe(el));

      // Then, add reveal to markdown content children and observe them
      const contentElements = document.querySelectorAll('.markdown-content > *');
      contentElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [slug]);

  if (!blog) return <PageLayout><p>Loading...</p></PageLayout>;

  return (
    <PageLayout title={blog.title} isWide={true}>
      <div className="blog-container">
        <article className="blog-detail">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={16} /> Back to Articles
          </Link>
          
          <header className="blog-header reveal">
            <div className="blog-meta">
              <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            </div>
            <h1 className="blog-title text-gradient">{blog.title}</h1>
            <div className="blog-tags">
              {blog.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </header>

          <div className="blog-cover reveal">
            <img src={blog.image} alt={blog.title} />
          </div>

          <div className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({children}) => <h1 id={slugify(children.toString())}>{children}</h1>,
                h2: ({children}) => <h2 id={slugify(children.toString())}>{children}</h2>,
                h3: ({children}) => <h3 id={slugify(children.toString())}>{children}</h3>,
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <CodeBlock
                      language={match[1]}
                      {...props}
                    >
                      {children}
                    </CodeBlock>
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

        {/* TABLE OF CONTENTS SIDEBAR */}
        <aside className="blog-sidebar">
          <div className="toc-wrapper">
            <h4 className="toc-title">ON THIS PAGE</h4>
            <nav className="toc-nav">
              <ul>
                {headings.map((heading, index) => (
                  <li 
                    key={index} 
                    className={`toc-item level-${heading.level}`}
                  >
                    <a href={`#${heading.id}`} onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </PageLayout>
  );
};

export default BlogDetail;
