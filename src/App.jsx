import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Biography from './components/Biography';
import Experience from './components/Experience';
import EducationSkills from './components/EducationSkills';
import Research from './components/Research';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const navItems = [
  { id: 'biography', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education & Skills' },
  { id: 'publications', label: 'Publications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

function App() {
  const [activeTab, setActiveTab] = useState('biography');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'biography':
        return <Biography setActiveTab={setActiveTab} />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <EducationSkills />;
      case 'research':
        return <Research />;
      case 'publications':
        return <Publications />;
      case 'achievements':
        return <Achievements />;
      case 'certifications':
        return <Certifications />;
      case 'contact':
        return <Contact />;
      default:
        return <Biography setActiveTab={setActiveTab} />;
    }
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false); // Close menu on mobile after clicking
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <div className="navbar-container">
        <nav className="navbar">
          <div className="logo-circle">
            SR
          </div>
          
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleTabClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="page-transition"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="app-footer">
        <div className="footer-content">
          <span className="footer-text">Developed and maintained by</span>
          <a href="https://skweblabs.in/" target="_blank" rel="noopener noreferrer">
            <img src="/skweb-logo.png" alt="SK Web Labs" className="skweb-logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
