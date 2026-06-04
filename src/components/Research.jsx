import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  return (
    <div className="research-section">
      <h1 className="section-title">RESEARCH</h1>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', borderBottom: '3px solid var(--yellow)', paddingBottom: '10px', marginBottom: '30px' }}>
          Research Interest
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{ padding: '20px', border: '2px solid var(--dark)', backgroundColor: '#fafafa' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>LinkedIn Profile:</h3>
            <a 
              href="https://www.linkedin.com/in/sheela-r-592b2722/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#0077b5', textDecoration: 'none', wordBreak: 'break-all', fontWeight: '600' }}
            >
              https://www.linkedin.com/in/sheela-r-592b2722/
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} style={{ padding: '20px', border: '2px solid var(--dark)', backgroundColor: '#fafafa' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>Orchid Id:</h3>
            <a 
              href="https://orcid.org/0000-0001-8924-0008" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#A6CE39', textDecoration: 'none', wordBreak: 'break-all', fontWeight: '600' }}
            >
              https://orcid.org/0000-0001-8924-0008
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} style={{ padding: '20px', border: '2px solid var(--dark)', backgroundColor: '#fafafa' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>Web of Science ID:</h3>
            <span style={{ fontSize: '18px', fontWeight: '600' }}>
              GPP-7165-2022
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Research;
