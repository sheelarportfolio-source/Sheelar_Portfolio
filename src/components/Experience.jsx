import React from 'react';

const ExperienceItem = ({ date, institution, title, responsibilities }) => (
  <div style={{ marginBottom: '40px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
    <p style={{ fontWeight: '700', color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>
      {date}
    </p>
    <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>{institution}</h3>
    <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--gold)', marginBottom: '15px' }}>{title}</h4>
    
    <h5 style={{ fontSize: '16px', marginBottom: '10px', fontWeight: '700' }}>Roles and Responsibilities</h5>
    
    <ul style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
      {responsibilities.map((resp, index) => (
        <li key={index} style={{ marginBottom: '5px' }}>{resp}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <div className="experience-section">
      <h1 className="section-title">EXPERIENCE</h1>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--card-bg)', padding: '40px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
        
        <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px', color: 'var(--gold)' }}>
          Current Employment Status
        </h2>
        
        <div style={{ marginBottom: '50px' }}>
          <p style={{ fontWeight: '700', color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '10px' }}>SEPTEMBER 2023 - TILL DATED</p>
          <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>Alliance University, Dept of Computer Science & Engineering, Anekal</h3>
          <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--gold)', marginBottom: '20px' }}>Associate Professor</h4>
          
          <h5 style={{ fontSize: '18px', marginBottom: '15px', textDecoration: 'underline' }}>Roles and Responsibilities</h5>
          
          <div style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
            <h6 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px', color: 'var(--text-primary)' }}>Course Coordinator</h6>
            <p style={{ marginBottom: '10px', fontSize: '15px' }}>Handled the responsibilities of Team Lead/ course coordinator - entails overseeing and managing various aspects of a particular course, including but not limited to:</p>
            <ol style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: '1.8' }}>
              <li>Ensure the curriculum aligns with the institution's educational objectives and standards. Also, collaborate with faculty members to develop or update course materials, assignments, and assessments.</li>
              <li>Regularly communicate with relevant stakeholders, including students, faculty, departmental administrators, and external partners.</li>
              <li>Instruments, grading policies, and providing feedback to students and faculty.</li>
              <li>Support faculty members by facilitating communication, providing resources, and assisting with administrative tasks related to course delivery.</li>
            </ol>
          </div>

          <div style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
            <h6 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px', color: 'var(--text-primary)' }}>Student Research Co-Ordinator</h6>
            <ol style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: '1.8' }}>
              <li>Organize training sessions and workshops to develop students' research skills, including literature review, research methodologies, data collection, analysis, and presentation.</li>
              <li>Assist students in disseminating their research findings through various channels such as conferences, journals, and presentations.</li>
              <li>Promote a culture of research and scholarly inquiry among students by organizing events, competitions, and seminars related to research topics.</li>
            </ol>
          </div>

          <div style={{ color: 'var(--text-secondary)' }}>
            <h6 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px', color: 'var(--text-primary)' }}>Class Advisor</h6>
            <ol style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: '1.8' }}>
              <li>Represent the class in faculty meetings and committees, voicing student perspectives on issues related to curriculum development, program enhancements, and student welfare initiatives.</li>
              <li>Assist students in understanding the curriculum requirements, helping them navigate academic challenges, and providing resources for academic success.</li>
              <li>Bridge between students and faculty, facilitating communication and fostering a collaborative learning environment.</li>
            </ol>
          </div>
        </div>

        <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px', color: 'var(--gold)' }}>
          Past Experience
        </h2>

        <ExperienceItem 
          date="FEB 2021 – AUGUST 2023"
          institution="Jain University, Dept Of CS&IT, Knowledge Campus, Bangalore"
          title="Associate & Academic Consultant, MILES EDUCATION"
          responsibilities={[
            "Syllabus & content development for domain-specific specialization courses of Cyber Security",
            "Guide for Project Centric Learning (PCL)",
            "Meticulously prepared the syllabus and curriculum for Cyber Security Specialization Subjects Digital Forensics, Cyber Threat Intelligence, Incident Response Handling, Internet Security, Cyber Forensic Investigation.",
            "Taken initiative for Planning & Executing Industrial Visit for Students.",
            "Taken initiative for Planning & Executing Conferences, Seminars & Workshops for students.",
            "Effectively guided students in their research endeavors, including the publication of research papers.",
            "Mentoring and guiding students in their academic success.",
            "Active involvement in departmental committees, curriculum development, and academic research initiatives",
            "Actively participated in various departmental and institutional activities, served on committees, contributed to academic planning, and collaborated with colleagues, exhibiting a strong commitment to the overall growth and development of the institution."
          ]}
        />

        <ExperienceItem 
          date="JUNE 2017 to JAN 2021"
          institution="JAIN UNIVERSITY - Dept of FORENSIC SCIENCE & CYBER SECURITY"
          title="Assistant Professor"
          responsibilities={[
            "Has been part of the Forensic Science Dept for handling both practical & theory in Cyber Forensics, Digital Forensics, ForensicComputing, and Cyber Security.",
            "Have guided final year students with cyber forensics subjects as specialization.",
            "Has been part of practical exams conducted by CIFS & has been to other colleges as an external examiner.",
            "Paper Setter for CIFS, Cyber Forensics, JAIN University, Examination Board.",
            "Lecture planning, preparation, and research"
          ]}
        />

        <ExperienceItem 
          date="March 2015 - April 2017"
          institution="MAHARANI'S SCIENCE COLLEGE FOR WOMEN (Dept of CS & MCA), Bangalore"
          title="Assistant Professor"
          responsibilities={[
            "Has been working as GUEST FACULTY at Dept of CS. (MCA)",
            "Have Co-Authored a BOOK on \"COMPUTER APPLICATION & INFORMATION TECHNOLOGY\" for VI Sem BA/BCA/B.Sc. (Bangalore University)",
            "Handling both theory & practical in Computer concepts and programming for both PG & UG students.",
            "Had been assigned as a Guide for MCA students in Mini-Projects.",
            "Prepared SLM of Database Management Systems of MBA Program, Jain University",
            "Developed \"OPERATING SYSTEM\" COURSE MATERIALS for JAIN University, Regular Classes."
          ]}
        />

        <ExperienceItem 
          date="JUNE 2007 to NOV 2012"
          institution="JAIN UNIVERSITY (BCA DEPT), School of Science, JC Road, Bangalore"
          title="Lecturer"
          responsibilities={[
            "Participated in the development, administration, and marking of exams and other assessments Handling both theory & practical in Computer concepts",
            "Convenor for BCA Forum, Jain University. (2008 to 2011)",
            "Taken up the responsibility as Class teacher Coordinating Mentorship for all BCA students",
            "Convener for \"Anveshana\" - Talent search program for BCA students (Inter Class Fest)",
            "Convener for \"LOGIN\" - Talent search program for BCA students (Inter Collegiate Fest)"
          ]}
        />

      </div>
    </div>
  );
};

export default Experience;
