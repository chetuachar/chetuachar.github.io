import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code, Terminal, Cpu, Layers, Lock, ShieldCheck, Database, ListCollapse } from 'lucide-react';
import PageLayout from '../layouts/PageLayout';
import CodeBlock from '../components/common/CodeBlock';
import { projects } from '../data/projects';
import goFiberSmtpDetails from '../data/go-fiber-smtp-api-gateway.json';
import imapDetails from '../data/imap-api-gateway.json';
import chatEngineDetails from '../data/real-time-chat-engine.json';
import farmerFriendDetails from '../data/farmer-friend-ecommerce.json';
import rabbitmqConsumerDetails from '../data/rabbitmq-consumer-template.json';
import ginApiDetails from '../data/gin-api-template.json';
import './Projects.css';

const detailsMap = {
  'imap-api-gateway': imapDetails,
  'go-fiber-smtp-api-gateway': goFiberSmtpDetails,
  'real-time-chat-engine': chatEngineDetails,
  'farmer-friend-ecommerce': farmerFriendDetails,
  'rabbitmq-consumer-template': rabbitmqConsumerDetails,
  'gin-api-template': ginApiDetails
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const closeModal = () => setSelectedProject(null);

  const details = selectedProject ? detailsMap[selectedProject.detailsKey] : null;

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
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-details"
                >
                  <ListCollapse size={16} /> View Details
                </button>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <Code size={16} /> Code
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Demo ↗
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                <X size={20} />
              </button>

              <div className="modal-scroll-area">
                {/* Modal Header */}
                <div className="modal-header">
                  <div className="modal-header-text">
                    <span className="modal-project-badge">Case Study & Specifications</span>
                    <h2 className="text-gradient">{selectedProject.title}</h2>
                    <p className="modal-subtitle">
                      {details?.subtitle || "Detailed Technical Blueprints & Architecture Case Study"}
                    </p>
                  </div>

                  <div className="modal-tech-list">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>

                <hr className="modal-divider" />

                {/* Modal Body */}
                <div className="modal-body">
                  {/* Overview */}
                  <section className="modal-section">
                    <h4 className="section-title"><Terminal size={18} /> Overview</h4>
                    <p>{details?.description || selectedProject.description}</p>
                  </section>

                  {/* Tech Stack Details */}
                  {details?.techStack && (
                    <section className="modal-section">
                      <h4 className="section-title"><Database size={18} /> Tech Stack Architecture</h4>
                      <div className="tech-stack-grid">
                        {Object.entries(details.techStack).map(([key, value]) => {
                          const cleanKey = key
                            .replace(/([A-Z])/g, ' $1')
                            .trim()
                            .replace(/^\w/, (c) => c.toUpperCase());

                          return (
                            <div key={key} className="tech-stack-item">
                              <span className="tech-stack-label">{cleanKey}</span>
                              <span className="tech-stack-value">{value}</span>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {/* Architecture Highlights */}
                  {details?.architectureHighlights && (
                    <section className="modal-section">
                      <h4 className="section-title"><Cpu size={18} /> Architectural Highlights</h4>
                      <div className="highlights-grid">
                        {details.architectureHighlights.map((highlight, idx) => (
                          <div key={idx} className="highlight-card">
                            <div className="highlight-card-header">
                              <div className="highlight-icon">
                                {idx === 0 ? <Cpu size={16} /> : idx === 1 ? <Lock size={16} /> : <Layers size={16} />}
                              </div>
                              <h5>{highlight.title}</h5>
                            </div>
                            <p>{highlight.description}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Modular Infrastructure */}
                  {details?.modularInfrastructure && (
                    <section className="modal-section">
                      <h4 className="section-title"><Layers size={18} /> Modular Infrastructure</h4>
                      <div className="highlights-grid">
                        {details.modularInfrastructure.map((infra, idx) => (
                          <div key={idx} className="highlight-card">
                            <div className="highlight-card-header">
                              <div className="highlight-icon">
                                <Layers size={16} />
                              </div>
                              <h5>{infra.title}</h5>
                            </div>
                            <p>{infra.description}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* API Endpoints */}
                  {details?.endpoints && (
                    <section className="modal-section">
                      <h4 className="section-title"><Layers size={18} /> REST API Endpoints Router</h4>
                      <div className="endpoints-container">
                        {details.endpoints.map((category, catIdx) => (
                          <div key={catIdx} className="endpoint-group">
                            <div className="endpoint-group-header">
                              <h5>{category.category}</h5>
                              {category.security && (
                                <span className="endpoint-security-badge">
                                  <Lock size={10} />
                                  {category.security}
                                </span>
                              )}
                            </div>
                            <div className="endpoint-routes-list">
                              {category.routes.map((route, routeIdx) => (
                                <div key={routeIdx} className="endpoint-row">
                                  <span className={`http-method method-${route.method.toLowerCase()}`}>
                                    {route.method}
                                  </span>
                                  <code className="endpoint-path">{route.path}</code>
                                  <span className="endpoint-desc">{route.description}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Getting Started */}
                  {details?.gettingStarted && (
                    <section className="modal-section">
                      <h4 className="section-title"><ShieldCheck size={18} /> Local Development Setup</h4>

                      <div className="prerequisites-list">
                        <h5>Prerequisites</h5>
                        <ul>
                          {details.gettingStarted.prerequisites.map((prereq, idx) => (
                            <li key={idx}>• {prereq}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="setup-steps-list">
                        <h5>Setup & Deployment Steps</h5>
                        {details.gettingStarted.setupAndRun.map((step, idx) => (
                          <div key={idx} className="setup-step">
                            <p className="setup-step-title">{idx + 1}. {step.step}</p>
                            {step.description && <p className="setup-step-desc">{step.description}</p>}
                            {step.command && (
                              <div className="setup-codeblock-wrapper">
                                <CodeBlock language="bash">{step.command}</CodeBlock>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Fallback for other projects */}
                  {!details && (
                    <section className="modal-section">
                      <h4 className="section-title"><Layers size={18} /> Blueprint Specifications</h4>
                      <p className="no-details-message">
                        Detailed endpoint catalogs, infrastructure flowcharts, and local developer setup instructions for this microservice are currently being compiled.
                      </p>
                      <div className="highlights-grid">
                        <div className="highlight-card">
                          <div className="highlight-card-header">
                            <div className="highlight-icon"><Cpu size={16} /></div>
                            <h5>Performance Engineered</h5>
                          </div>
                          <p>Optimized algorithms built for speed, lower latency, and memory safety under concurrent scaling loads.</p>
                        </div>
                        <div className="highlight-card">
                          <div className="highlight-card-header">
                            <div className="highlight-icon"><Layers size={16} /></div>
                            <h5>Modular Infrastructure</h5>
                          </div>
                          <p>Constructed in layers matching standard clean routing and handler specifications to isolate logic boundaries.</p>
                        </div>
                      </div>
                    </section>
                  )}
                </div>

                <hr className="modal-divider" />

                {/* Modal Footer */}
                <div className="modal-footer">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <Code size={16} /> View Repository
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} /> Launch Demo ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Projects;
