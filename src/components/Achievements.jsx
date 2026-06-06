import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <div className="achievements-section">
      <h1 className="section-title">OTHER ACHIEVEMENTS</h1>
      
      <div className="content-card">
        <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid var(--border-color)' }}>
            Reviewer for "Machine Vision and Application" (MVAP) Journal
          </li>
          <li style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid var(--border-color)' }}>
            Prepared SLM of Database Management Systems of MBA Program, Jain University
          </li>
          <li style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid var(--border-color)' }}>
            Developed "OPERATING SYSTEM" COURSE MATERIALS for JAIN University, Regular Classes.
          </li>
          <li style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid var(--border-color)' }}>
            Developed "OPERATING SYSTEM" COURSE MATERIALS for JAIN University, Distance Education.
          </li>
          <li style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid var(--border-color)' }}>
            Has been an external Examiner" for various colleges as Domain Specialization Subjects of Cyber Security and Digital Forensics.
          </li>
          <li style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid var(--border-color)' }}>
            Taken up responsibility as "BOE MEMBER" for Jain University, Dept of CS & IT (2015- 2016,2016- 2017) Coordinating Head for BCA practical exams.
          </li>
          <li style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid var(--border-color)' }}>
            Have been invited as judges for many inter and intra-collegiate fests, and events. Has been working as Convenor for BCA Forum, Jain University Sep 2008 to 2011
          </li>
          <li style={{ marginBottom: '0' }}>
            Have guided both UG & PG students to take up mini, and major projects as part of their curriculum. Convener for "Log in" - Talent search program for BCA students (Inter Collegiate Fest).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
