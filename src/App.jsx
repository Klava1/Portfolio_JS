import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Onboarding from './components/Onboarding';
import Header from './components/Header';
import About from './components/About';
import Stack from './components/Stack';
import SkillsChart from './components/SkillsChart';
import VideoSection from './components/VideoSection';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  const handleExploreWebsite = () => {
    setShowOnboarding(false);
  };

  const handleTalkWithAI = () => {
    // TODO: Implement AI chat interface transition
    console.log('AI chat interface - to be implemented');
    // For now, also hide onboarding (will be replaced with AI chat transition)
    setShowOnboarding(false);
  };

  return (
    <div className={`App ${showOnboarding ? 'onboarding-active' : ''}`}>
      {/* Main website content - loaded immediately */}
      <div className="main-website-content">
        <Header />
        <About />
        <Stack />
        <SkillsChart />
        <VideoSection />
        <Projects />
        <Contact />
      </div>

      {/* Onboarding overlay */}
      {showOnboarding && (
        <Onboarding
          onExploreWebsite={handleExploreWebsite}
          onTalkWithAI={handleTalkWithAI}
        />
      )}
    </div>
  );
}

export default App;


