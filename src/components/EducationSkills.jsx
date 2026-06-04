import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, percentage }) => (
  <div style={{ marginBottom: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
      <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>{skill}</span>
    </div>
    <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border-color)', position: 'relative', borderRadius: '4px', overflow: 'hidden' }}>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ height: '100%', backgroundColor: 'var(--gold)' }}
      />
    </div>
  </div>
);

const EducationSkills = () => {
  return (
    <div className="education-skills-section">
      <h1 className="section-title">EDUCATION & SKILLS</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', maxWidth: '1000px', margin: '0 auto', justifyContent: 'space-between' }}>
        
        {/* Education Column */}
        <div style={{ flex: '1 1 400px', backgroundColor: 'var(--card-bg)', padding: '40px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px', color: 'var(--gold)' }}>
            Education
          </h2>
          
          <div style={{ marginBottom: '30px', paddingLeft: '20px', borderLeft: '2px solid var(--gold)' }}>
            <p style={{ fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '5px' }}>November 2022</p>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>Ph.D. Periocular Face Recognition</h3>
            <p style={{ color: 'var(--text-secondary)' }}>JAIN University, Bengaluru, India</p>
          </div>

          <div style={{ marginBottom: '30px', paddingLeft: '20px', borderLeft: '2px solid var(--gold)' }}>
            <p style={{ fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '5px' }}>May 2009</p>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>MPhil Image Processing</h3>
            <p style={{ color: 'var(--text-secondary)' }}>PRIST University, Thanjavur, India</p>
          </div>

          <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--gold)' }}>
            <p style={{ fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '5px' }}>April 2006</p>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>M.Sc. Computer Science</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Kuvempu University, Shimoga, India</p>
          </div>
        </div>

        {/* Skills Column */}
        <div style={{ flex: '1 1 400px', backgroundColor: 'var(--card-bg)', padding: '40px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px', color: 'var(--gold)' }}>
            Skills
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5px' }}>
            <SkillBar skill="Expertise in Computer Science" percentage={90} />
            <SkillBar skill="Teaching and Pedagogy" percentage={95} />
            <SkillBar skill="Curriculum Development" percentage={90} />
            <SkillBar skill="Research Skills" percentage={85} />
            <SkillBar skill="Teamwork and Collaboration" percentage={95} />
            <SkillBar skill="Critical thinking" percentage={90} />
            <SkillBar skill="Communication Skills" percentage={95} />
          </div>

          <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', margin: '40px 0 30px', color: 'var(--gold)' }}>
            Languages
          </h2>
          <div>
            <SkillBar skill="English" percentage={85} />
            <SkillBar skill="Kannada" percentage={85} />
            <SkillBar skill="Hindi" percentage={85} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationSkills;
