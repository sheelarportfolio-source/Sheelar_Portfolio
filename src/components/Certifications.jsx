import React from 'react';

const Certifications = () => {
  return (
    <div className="certifications-section">
      <h1 className="section-title">Professional Development & Certifications</h1>
      
      <div className="content-card">
        <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '20px', color: 'var(--gold)' }}>
          Certifications Completed:
        </h2>
        <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '15px' }}>
            <span style={{ color: 'var(--text-primary)' }}>Web Penetration Testing</span> Certificate No-EBWPTO92400001
          </li>
          <li style={{ marginBottom: '15px' }}>
            <span style={{ color: 'var(--text-primary)' }}>DIGITAL FORENSIC</span> from EthicalBytes- certificate No-EBDFO90723JJOO05
          </li>
          <li style={{ marginBottom: '0' }}>
            <span style={{ color: 'var(--text-primary)' }}>ETHICAL HACKING</span> from EthicalBytes- certificate No-EBEHO90723JJOO02
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Certifications;