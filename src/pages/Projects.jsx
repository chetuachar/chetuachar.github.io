import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../layouts/PageLayout';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <PageLayout title="Projects">
      <div className="section-header">
        <h1 className="text-gradient">Featured Work</h1>
        <p>A selection of recent projects I have built.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article 
            key={project.id}
            className="project-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  Code
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Demo ↗
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
};

export default Projects;
