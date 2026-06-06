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
              <strong style={{color: 'var(--text-primary)'}}>Multi-site and Multi-Population Validation of Deep Learning Models for CHD Prediction</strong><br/>
              In the process of publication at Bentham Science Publication (2026)
            </li>
            <li style={{ marginBottom: '15px' }}>
              <strong style={{color: 'var(--text-primary)'}}>Title:</strong> "Unmasking the masked face recognition and its challenges using periocular region: A Review". Handbook of Research on Technical, Privacy, and Security Challenges in a Modern World Global Publication. (2022, Published)<br/>
              <strong style={{color: 'var(--text-primary)'}}>DOI:</strong> 10.4018/978-1-6684-5250-9.ch004
            </li>
            <li style={{ marginBottom: '15px' }}>
              <strong style={{color: 'var(--text-primary)'}}>Title:</strong> "From Data to Insights: Employing Interpretable Machine Learning for Advanced Attendance Tracking Solutions" published under Jenny Stanford Imprint, exclusively distributed by Taylor & Francis and offered to Scopus and Web of Science for indexing. Explainable Artificial Intelligence: Concepts, Methodologies and Applications<br/>
              <strong style={{color: 'var(--text-primary)'}}>Book Series:</strong> Series on Artificial Intelligence and Machine Learning
            </li>
          </ul>
        </div>

        {/* Books As Co-Authors */}
        <div style={{ marginBottom: '50px', backgroundColor: 'var(--card-bg)', padding: '40px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '20px', color: 'var(--gold)' }}>
            Books As Co-Authors
          </h2>
          <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '15px' }}>
              Co-Authored a Book on <strong style={{color: 'var(--text-primary)'}}>"Digital Revolution India-Cybersecurity Essentials for Digital Age"</strong>. Publisher- Astitva, Prakashan: 9789358382723. Jan-2025
            </li>
            <li style={{ marginBottom: '15px' }}>
              Co-Authored a Book on <strong style={{color: 'var(--text-primary)'}}>"Cybersecurity Principles for Digital Age"</strong> Published By "Techscholastic Press Amazon Scholar. ISBN: 979-8307086292. Jan-2025
            </li>
            <li style={{ marginBottom: '0' }}>
              Co-Authored a BOOK on <strong style={{color: 'var(--text-primary)'}}>"COMPUTER APPLICATION & INFORMATION TECHNOLOGY"</strong> for VI Sem BA/BCA/B.Sc. (Bangalore University)-2016
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
              <strong style={{color: 'var(--text-primary)'}}>Design Patent No:</strong> <span style={{color: 'var(--text-secondary)'}}>6514191</span><br/>
              <strong style={{color: 'var(--text-primary)'}}>Title:</strong> <span style={{color: 'var(--text-secondary)'}}>Machine Intelligence Supervision Interface with Behavioural Pattern Mapping Display</span><br/>
              <span style={{color: 'var(--text-secondary)'}}>Certificate of Registration for a UK Design</span>
            </li>
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
              <span style={{color: 'var(--text-primary)'}}>Evaluating the Efficacy of Deep Learning Models in Identifying and Mitigating Cybersecurity Threats and Attacks (2025)</span><br/>
              DOI: <a href="https://doi.org/10.1109/CE2CT64011.2025" target="_blank" rel="noopener noreferrer">https://doi.org/10.1109/CE2CT64011.2025</a>
            </li>
            
            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>"Uncovering Vulnerabilities and Security Challenges in IoT Devices: A Comprehensive Investigation" (Accepted for Publication).</span><br/>
              @ ICDAM- 2024 5th International Conference on Data Analysis and Management Organized by London Metropolitan University, London, UK (Venue Partner)in association with WSG University, Bydgoszcz, Poland, Europe (2023)
            </li>
            
            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>Ensemble Training Approach Based on Multivariate Empirical Mode Decomposition and Convolution Neural Network For Periocular Recognition.</span><br/>
              International Journal of Advanced Science and Engineering(2023)<br/>
              DOI: <a href="https://doi.org/10.29294/IJASE.10.3.2024.3566-3580" target="_blank" rel="noopener noreferrer">https://doi.org/10.29294/IJASE.10.3.2024.3566-3580</a>
            </li>
            
            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>A Comprehensive Survey on the Advancements in DeepLearning Techniques for Detecting Deep Fake Images</span><br/>
              Tuijin Jishu/Journal of Propulsion Technology. ISSN: 1001-4055Vol. 45 No. 1 (2024)
            </li>
            
            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>A Comparative Study On Regularization Techniques In Convolutional Neural Networks,</span><br/>
              IAENG International Journal of Computer Science10 (Issue 7).ISSN (Online): 2320-9364, ISSN (Print): 2320-9356 Volume 10 Issue 7 || July 2022 || PP. 784-793.
            </li>

            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>SCI PUBLICATION: Region-specific and subimage-based neighbour gradient feature extraction for robust periocular recognition.</span><br/>
              Journal of King Saud University-Computer and Information Sciences, 34(10), 7961-7973.<br/>
              DOI: <a href="https://doi.org/10.1016/j.jksuci.2022.07.013" target="_blank" rel="noopener noreferrer" style={{wordBreak: 'break-all'}}>https://doi.org/10.1016/j.jksuci.2022.07.013</a>
            </li>

            <li style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{color: 'var(--text-primary)'}}>Periocular Region Recognition—A Brief Survey.</span><br/>
              In: Deva Sarma, H.K., Piuri, V., Pujari, A.K. (eds) Machine Learning in Information and Communication Technology. Lecture Notes in Networks and Systems, vol 498. Springer, Singapore.<br/>
              DOI: <a href="https://doi.org/10.1007/978-981-19-5090-2_6" target="_blank" rel="noopener noreferrer" style={{wordBreak: 'break-all'}}>https://doi.org/10.1007/978-981-19-5090-2_6</a>
            </li>

            <li style={{ marginBottom: '0' }}>
              <span style={{color: 'var(--text-primary)'}}>An Analysis of Periocular Region Recognition.</span><br/>
              International journal of advanced Science and Engineering 8 (4) , 2451<br/>
              DOI: <a href="https://doi.org/10.29294/IJASE.8.4.2022.2451-2461" target="_blank" rel="noopener noreferrer" style={{wordBreak: 'break-all'}}>https://doi.org/10.29294/IJASE.8.4.2022.2451-2461</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Publications;
