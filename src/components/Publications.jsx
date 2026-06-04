import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
  return (
    <div className="publications-section">
      <h1 className="section-title">PUBLICATIONS & PATENTS</h1>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Book Chapters */}
        <div style={{ marginBottom: '50px', backgroundColor: 'var(--card-bg)', padding: '40px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '20px', color: 'var(--gold)' }}>
            Book Chapters
          </h2>
          <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '15px' }}>
              <strong style={{color: 'var(--text-primary)'}}>Title:</strong> "Unmasking the masked face recognition and its challenges using periocular region: A Review. Handbook of Research on Technical, Privacy, and Security Challenges in a Modern World Global Publication.<br/>
              Sheela R, Suchithra. R, (2022, Published)<br/>
              <strong style={{color: 'var(--text-primary)'}}>DOI:</strong> 10.4018/978-1-6684-5250-9.ch004
            </li>
          </ul>
        </div>

        {/* Patents */}
        <div style={{ marginBottom: '50px', backgroundColor: 'var(--card-bg)', padding: '40px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '20px', color: 'var(--gold)' }}>
            Patents
          </h2>
          <ul style={{ paddingLeft: '0', fontSize: '16px', lineHeight: '1.8', listStyleType: 'none' }}>
            <li style={{ marginBottom: '20px', padding: '20px', border: '1px solid var(--border-color)', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <strong style={{color: 'var(--text-primary)'}}>Patent No:</strong> <span style={{color: 'var(--text-secondary)'}}>202241028512</span><br/>
              <strong style={{color: 'var(--text-primary)'}}>Title of invention:</strong> <span style={{color: 'var(--text-secondary)'}}>"REGION SPECIFIC AND SUB IMAGE BASED NEIGHBOUR GRADIENT FEATURE EXTRACTION FOR ROBUST PERIOCULAR"</span>
            </li>
            <li style={{ marginBottom: '20px', padding: '20px', border: '1px solid var(--border-color)', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <strong style={{color: 'var(--text-primary)'}}>Patent No:</strong> <span style={{color: 'var(--text-secondary)'}}>202241006638</span><br/>
              <strong style={{color: 'var(--text-primary)'}}>Title of invention:</strong> <span style={{color: 'var(--text-secondary)'}}>"MONITORING OF BODY TEMPERATURE WITH ALERT THROUGH IOT WITHOUT CONTACT TO HUMAN BODY DURING COVID SITUATIONS"</span>
            </li>
          </ul>
        </div>

        {/* Research Publications */}
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '40px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '20px', color: 'var(--gold)' }}>
            Research Publications
          </h2>
          <ul style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>Sheela Ramachandra, & Suchithra Ramachandran, (2022).</span><br/>
              Region-specific and subimage-based neighbour gradient feature extraction for robust periocular recognition. Journal of King Saud University-Computer and InformationSciences, 34(10), 7961-7973.<br/>
              <a href="https://doi.org/10.1016/j.jksuci.2022.07.013" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.jksuci.2022.07.013</a>
            </li>
            
            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>Sheela R, Suchithra R. (2023).</span> Periocular Region Recognition—A Brief Survey. In: Deva Sarma, H.K., Piuri, V., Pujari, A.K. (eds) Machine Learning in Information and Communication Technology. Lecture Notes in Networks and Systems, vol 498. Springer, Singapore.<br/>
              <a href="https://doi.org/10.1007/978-981-19-5090-2_6" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/978-981-19-5090-2_6</a>
            </li>
            
            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>R Sheela, R Suchithra (2022).</span> An Analysis of Periocular RegionRecognition. International journalof advanced Scienceand Engineering 8 (4), 2451<br/>
              <a href="https://doi.org/10.29294/IJASE.8.4.2022.2451-2461" target="_blank" rel="noopener noreferrer">https://doi.org/10.29294/IJASE.8.4.2022.2451-2461</a>
            </li>
            
            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>Agnes Lyda, Sheela R (2022).</span> A Comparative Study On Regularization Techniques In Convolutional Neural Networks, IAENG International Journal of Computer Science 10 (Issue 7). ISSN (Online): 2320-9364, ISSN (Print): 2320-9356 www.ijres.org Volume 10 Issue 7 || July 2022 || PP. 784-793.<br/>
              <a href="https://www.ijres.org/papers/Volume-10/Issue-7/1007784793.pdf" target="_blank" rel="noopener noreferrer" style={{wordBreak: 'break-all'}}>https://www.ijres.org/papers/Volume-10/Issue-7/1007784793.pdf</a>
            </li>
            
            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>Sheela Ramachandra, Smitha Rajagopal (2023).</span> A Comprehensive Survey on the Advancements in Deep Learning Techniques for Detecting Deep Fake Images Tuijin Jishu/Journal of Propulsion Technology. ISSN: 1001-4055Vol. 45 No. 1 (2024)<br/>
              <a href="https://www.propulsiontechjournal.com/index.php/journal/article/view/5253" target="_blank" rel="noopener noreferrer" style={{wordBreak: 'break-all'}}>https://www.propulsiontechjournal.com/index.php/journal/article/view/5253</a>
            </li>

            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>Sheela Ramachandra, Smitha Rajagopal (2023).</span><br/>
              Ensemble Training Approach Based on Multivariate Empirical Mode Decomposition and Convolution Neural Network For Periocular Recognition. International Journal of Advanced Science and Engineering(2023)<br/>
              <a href="https://doi.org/10.29294/IJASE.10.3.2024.3566-3580" target="_blank" rel="noopener noreferrer" style={{wordBreak: 'break-all'}}>https://doi.org/10.29294/IJASE.10.3.2024.3566-3580</a>
            </li>

            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>Sheela Ramachandra, Smitha Rajagopal (2023).</span> "Uncovering Vulnerabilities and Security Challenges in IoT Devices: A Comprehensive Investigation" (Accepted for Publication). @ ICDAM-2024 5th International Conference on Data Analysis and Management Organized by London Metropolitan University, London, UK (Venue Partner) in association with WSG University, Bydgoszcz, Poland, Europe
            </li>

            <li style={{ marginBottom: '0' }}>
              <span style={{color: 'var(--text-primary)'}}>Design of a Face Recognition Model using Periocular Region for Identification of Masked Faces.</span><br/>
              <a href="http://hdl.handle.net/10603/442407" target="_blank" rel="noopener noreferrer" style={{wordBreak: 'break-all'}}>http://hdl.handle.net/10603/442407</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Publications;
