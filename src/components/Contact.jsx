import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="section-title">CONTACT ME</h1>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'var(--card-bg)', padding: '50px', borderRadius: '20px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
        
        <div style={{ marginBottom: '40px', paddingBottom: '30px', borderBottom: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '20px', color: 'var(--gold)', marginBottom: '10px' }}>Phone</h2>
          <p style={{ fontSize: '28px', fontWeight: '600', color: 'var(--text-primary)' }}>+91-9945529814</p>
        </div>

        <div>
          <h2 style={{ fontSize: '20px', color: 'var(--gold)', marginBottom: '10px' }}>Email</h2>
          <p style={{ fontSize: '28px', fontWeight: '600', color: 'var(--text-primary)' }}>sheelamohare@gmail.com</p>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
