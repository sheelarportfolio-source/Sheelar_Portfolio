import React, { useState } from 'react';
import { Download, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { currentExperienceDate, pastExperiencesData } from './Experience';

const Biography = ({ setActiveTab }) => {
  const [showProfile, setShowProfile] = useState(false);

  const calculateExperience = () => {
    const dateStrings = [
      currentExperienceDate,
      ...pastExperiencesData.map(exp => exp.date)
    ];

    let totalMonths = 0;
    dateStrings.forEach(dateRange => {
      // Split by hyphen, en-dash or "to"
      const parts = dateRange.split(/\s*(?:-|–|to)\s*/i);
      if (parts.length === 2) {
        const start = new Date(parts[0]);
        const end = parts[1].toLowerCase().includes('present') ? new Date() : new Date(parts[1]);
        
        if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
          const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
          totalMonths += months;
        }
      }
    });

    return Math.floor(totalMonths / 12);
  };
  const yearsExperience = calculateExperience();

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
            <button className="btn-outline" onClick={() => setShowProfile(!showProfile)}>
              {showProfile ? 'Hide Profile' : 'View Full Profile'}
              {showProfile ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            <a href="/resume.pdf" download="Dr_Sheela_Resume.pdf" className="btn-outline" style={{ textDecoration: 'none' }}>
              <Download size={18} />
              Resume
            </a>
            <div className="connect-wrapper">
              <span className="connect-text">CONNECT</span>
              <a href="https://www.linkedin.com/in/dr-r-sheela-chandrashekar-592b2722?utm_source=share_via&utm_content=profile&utm_medium=member_android/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="extended-profile"
                style={{ overflow: 'hidden', marginTop: '30px' }}
              >
                <div style={{ backgroundColor: 'var(--card-bg)', padding: '25px', borderRadius: '15px', border: '1px solid var(--border-color)' }}>
                  <ul style={{ listStylePosition: 'inside', color: 'var(--text-secondary)', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '10px' }}>
                    <li><strong style={{color: 'var(--text-primary)'}}>Dr. Sheela R.</strong> is a highly accomplished educator and academician with a Doctorate in CS&IT (Periocular Face Recognition).</li>
                    <li>She is passionate about imparting knowledge and skills to students from diverse backgrounds.</li>
                    <li>She has Progressive teaching experience of {yearsExperience}+ years in Computer Science Subject. An individual with good communication and interpersonal skills. She has rich experience in teaching and guiding BCA, B.Sc., M.Sc., and MCA students.</li>
                    <li>Her expertise in the field, ability to deliver engaging lectures, and commitment to education have earned her the respect and admiration of students.</li>
                    <li>She excels in creating an engaging learning environment. Her teaching methods are widely respected for encouraging in-depth learning and promoting meaningful student interactions.</li>
                    <li>To her credit, she has a paper published in SCI-indexed journals at King Saud University, contributed a book chapter to IGI Global Publications, and Co-authored two textbooks. She is invited as a resource person at multiple colleges and served as a judge for various inter- and intra-collegiate events.</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
              <span className="badge-number">{yearsExperience}<span style={{color: 'var(--gold)'}}>+</span></span>
              <span className="badge-label">Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Biography;
