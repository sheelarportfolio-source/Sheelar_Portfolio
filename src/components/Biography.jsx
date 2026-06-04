import React from 'react';
import { Download, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Biography = ({ setActiveTab }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero-subtitle">HELLO, I'M</p>
          <h1 className="hero-title">Dr. Sheela R</h1>
          <p className="hero-description">
          Associate Professor and HOD, Academic Consultant
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setActiveTab('contact')}>Contact Me</button>
            <a href="/resume.pdf" download="Dr_Sheela_Resume.pdf" className="btn-outline" style={{ textDecoration: 'none' }}>
              <Download size={18} />
              Resume
            </a>
            <div className="connect-wrapper">
              <span className="connect-text">CONNECT</span>
              <a href="https://www.linkedin.com/in/sheela-r-592b2722/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-image-wrapper">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 0.8
            }
          }}
          className="hero-image-container"
        >
          <img src="/profile.jpg" alt="Dr. Sheela R" className="hero-image" onError={(e) => { e.target.style.display = 'none'; }} />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="experience-badge"
          >
            <Shield className="badge-icon" size={28} />
            <div className="badge-text">
              <span className="badge-number">17<span style={{color: 'var(--gold)'}}>+</span></span>
              <span className="badge-label">Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Biography;
