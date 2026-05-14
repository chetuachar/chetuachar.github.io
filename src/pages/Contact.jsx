import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data/config';
import './Contact.css';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const { serviceId, templateId, publicKey } = siteConfig.emailConfig;

    if (serviceId === "YOUR_SERVICE_ID" || !serviceId) {
      console.warn("EmailJS is not configured. Please set YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY in src/data/config.js");
      // Simulate success for demo purposes if not configured, or show error
      setTimeout(() => {
        setIsSubmitting(false);
        setStatus('error');
        alert("Email service not configured. Please see the console or implementation plan for setup instructions.");
      }, 1500);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "chethan.nv@example.com", // Replace with real email if needed
      link: "mailto:chethan.nv@example.com"
    },
    {
      icon: <LinkedinIcon size={20} />,
      title: "LinkedIn",
      value: "linkedin.com/in/chethannv",
      link: siteConfig.socials.linkedin
    },
    {
      icon: <GithubIcon size={20} />,
      title: "GitHub",
      value: "github.com/chethan.nv12",
      link: siteConfig.socials.github
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Bengaluru, India",
      link: null
    }
  ];

  return (
    <div className="contact-container container">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Get In <span className="text-gradient">Touch</span></h1>
        <p>Have a project in mind or want to discuss engineering opportunities? Drop me a message and I'll get back to you as soon as possible.</p>
      </motion.div>

      <div className="contact-grid">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.link?.startsWith('http') ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="info-card"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="icon-wrapper">
                {info.icon}
              </div>
              <div className="info-content">
                <h3>{info.title}</h3>
                <p>{info.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input 
                type="text" 
                id="user_name" 
                name="user_name" 
                required 
                placeholder="Your Name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input 
                type="email" 
                id="user_email" 
                name="user_email" 
                required 
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div 
                className="status-message success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={18} /> Message sent successfully!
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div 
                className="status-message error"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <AlertCircle size={18} /> Failed to send message. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
