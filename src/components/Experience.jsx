import React, { useState } from 'react';

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

const SectionTitle = ({ title }) => (
  <h6 style={{ fontSize: '16px', fontWeight: '700', marginTop: '20px', marginBottom: '10px', color: 'var(--text-primary)' }}>
    {title}
  </h6>
);

const ExperienceList = ({ items }) => (
  <ul style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
    {items.map((item, index) => (
      <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
    ))}
  </ul>
);

const Experience = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="experience-section">
      <h1 className="section-title">EXPERIENCE</h1>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--card-bg)', padding: '40px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
        
        <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px', color: 'var(--gold)' }}>
          Currently Working
        </h2>
        
        <div style={{ marginBottom: '50px' }}>
          <p style={{ fontWeight: '700', color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '10px' }}>JAN 2025 - PRESENT</p>
          <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>SSMRV College, RV Institutions</h3>
          <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--gold)', marginBottom: '20px' }}>HOD-Department of Computer Applications & Associate Professor</h4>
          
          <h5 style={{ fontSize: '18px', marginBottom: '15px', textDecoration: 'underline' }}>ACADEMIC RESPONSIBILITIES & ACHIEVEMENTS AS HOD</h5>
          
          <SectionTitle title="Academic Leadership & Department Administration" />
          <ExperienceList items={[
            "Successfully led and strengthened the BCA Department through strategic planning, academic governance, and outcome-oriented execution.",
            "Developed and executed departmental academic and event calendars aligned with institutional objectives.",
            "Established a structured continuous assessment framework, ensuring smooth conduct of Internal Assessments, assignment evaluations, scrutiny processes, and timely UUCMS updates.",
            "Strengthened faculty accountability through clear role allocation, monitoring mechanisms, and academic process management.",
            "Implemented systematic attendance monitoring with categorization into Normal, Acute, and Red-Zone cases, including remedial measures and parent engagement."
          ]} />

          <SectionTitle title="Industry Collaboration & Employability Initiatives" />
          <ExperienceList items={[
            "Facilitated industry-academia collaboration through strategic partnerships with experts, organizations, and technology professionals.",
            "Signed and onboarded 5+ industry MoUs to enhance internships, training opportunities, and industry exposure.",
            "Enabled internship opportunities for more than 35 students, resulting in 7 internship-to-placement conversions, particularly in the UI/UX domain.",
            "Invited industry leaders and domain experts for workshops, seminars, and knowledge-sharing sessions."
          ]} />

          <SectionTitle title="Flagship Events & Institutional Branding" />
          <ExperienceList items={[
            "Successfully organized and led INNOVISION 2025, the flagship event of SSMRV.",
            "Secured nearly 80% sponsorship support.",
            "Facilitated participation from over 12 schools and colleges.",
            "Generated 15 internship opportunities for students.",
            "Enhanced the academic visibility and brand presence of SSMRV."
          ]} />

          <SectionTitle title="Digital Presence & Admissions Support" />
          <ExperienceList items={[
            "Led the initiative to strengthen the digital presence of SSMRV through a structured Google Review campaign.",
            "Significantly improved online visibility and institutional reputation to support admissions for AY 2026.",
            "Created awareness among students, alumni, and stakeholders regarding the importance of digital branding."
          ]} />

          <SectionTitle title="Academic Leadership & External Recognition" />
          <ExperienceList items={[
            "Appointed as Paper Chief (ECD Board, CLIPR, CYBER SECURITY, ETHICAL HACKING) under Bengaluru City University.",
            "Served as Advisory Board Member for Kristu Jayanti College/University (BCA & MCA).",
            "Served as Advisory Member for NexDesign Company."
          ]} />

          <h5 style={{ fontSize: '18px', marginTop: '30px', marginBottom: '15px', textDecoration: 'underline' }}>Strategic Initiatives & Institutional Development as HOD</h5>

          <SectionTitle title="BCA Forum – Student Leadership & Engagement Platform" />
          <ExperienceList items={[
            "Conceptualized and established the BCA Forum.",
            "Empowered students to independently plan, organize, and execute departmental activities under faculty mentorship.",
            "Introduced a structured governance model through Office Bearers Elections, promoting democratic participation and leadership development.",
            "Enabled students to lead and coordinate various technical and co-curricular initiatives, including: Hackathons, Pitch Deck Competitions, Cinemathon, Technical Workshops, Student Forums and Panel Discussions, Innovation Challenges and Technical Events."
          ]} />

          <SectionTitle title="Establishment of IEEE Student Chapter" />
          <ExperienceList items={[
            "Spearheaded the initiative to establish the IEEE Student Chapter at SSMRV, recognizing the need to expose students to global technical and professional communities.",
            "Successfully onboarded faculty and student memberships to meet chapter formation requirements.",
            "Strengthening Research Culture through \"ANVESHANA\"-Research Club to cultivate a research and innovation mindset among students.",
            "Integrated IEEE Student Chapter activities with ANVESHANA to create a structured pathway."
          ]} />

          <SectionTitle title="TEDx Onboarding Initiative" />
          <ExperienceList items={[
            "Initiated discussions and groundwork towards onboarding TEDx at SSMRV, with the objective of creating a platform for thought leadership, innovation, storytelling, and idea-sharing.",
            "Worked towards establishing connections and fulfilling requirements necessary for hosting TEDx events at the institution.",
            "Envisioned TEDx as a platform to showcase student talent, faculty expertise, entrepreneurial journeys, and impactful ideas from the academic community."
          ]} />
        </div>

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <button 
            onClick={() => setShowHistory(!showHistory)}
            style={{
              padding: '12px 24px',
              backgroundColor: 'var(--gold)',
              color: '#000',
              border: 'none',
              borderRadius: '30px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            {showHistory ? 'Hide Employment History' : 'View Employment History'}
          </button>
        </div>

        {showHistory && (
          <div style={{ animation: 'fadeIn 0.5s ease' }}>
            <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px', color: 'var(--gold)' }}>
              Past Experience
            </h2>

            <ExperienceItem 
              date="SEPTEMBER 2023 - AUGUST 2024"
              institution="Alliance University, Dept of Computer Science & Engineering, Anekal"
              title="Associate Professor"
              responsibilities={[
                "Course Coordinator: Ensure curriculum aligns with objectives, communicate with stakeholders, handle grading policies, support faculty.",
                "Student Research Co-Ordinator: Organize training sessions, assist in disseminating research findings, promote research culture.",
                "Class Advisor: Represent the class in faculty meetings, assist students in understanding curriculum requirements, bridge between students and faculty."
              ]}
            />

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
        )}
      </div>
    </div>
  );
};

export default Experience;
