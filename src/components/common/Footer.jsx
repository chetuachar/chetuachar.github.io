import React from 'react';
import { siteConfig } from '../../data/config';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <h3>{siteConfig.name}</h3>
          <p>{siteConfig.role}</p>
        </div>
        <div className="footer-right">
          <div className="social-links">
            <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <span>GitHub</span>
            </a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <span>LinkedIn</span>
            </a>
            <a href={siteConfig.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
              <span>Twitter</span>
            </a>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <span>Instagram</span>
            </a>
          </div>
          <p className="copyright">© {year} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
