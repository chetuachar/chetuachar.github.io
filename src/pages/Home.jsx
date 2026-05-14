import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import PageLayout from '../layouts/PageLayout';
import { siteConfig, skills } from '../data/config';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <PageLayout title="Home">
      <section className="hero">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">{siteConfig.name}</span>
            </h1>
            <h2 className="hero-subtitle">{siteConfig.role}</h2>
            <p className="hero-bio">{siteConfig.bio}</p>
            
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">View Work</Link>
              <a href={siteConfig.resumeUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
                <Download size={18} /> Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="avatar-wrapper">
              <img src="/avatar.png" alt={siteConfig.name} className="main-avatar" />
              <div className="avatar-glow"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="skills-section">
        <motion.h3 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="section-heading"
        >
          Key Expertise
        </motion.h3>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4>{skill.name}</h4>
              <p className="skill-category">{skill.category}</p>
              <div className="progress-bar">
                <motion.div 
                  className="progress" 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
