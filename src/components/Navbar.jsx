import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Download } from 'lucide-react';
import kctLogo from '../assets/KCT.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logos">
          <a href="#" className="nav-tedx-logo">
            <span className="ted-red">TEDx</span>KCT
          </a>
          <div className="nav-divider"></div>
          <a href="https://kct.ac.in" target="_blank" rel="noreferrer" className="nav-kct-logo-wrap">
            <img src={kctLogo} alt="KCT Logo" className="nav-kct-logo" />
            <span className="nav-kct-text">Kumaraguru College<br/>of Technology</span>
          </a>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#speakers" onClick={() => setMobileMenuOpen(false)}>Speakers</a>
          <a href="#schedule" onClick={() => setMobileMenuOpen(false)}>Schedule</a>
          <a href="#footer" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="https://www.ted.com/tedx/events/61551" target="_blank" rel="noreferrer" className="btn nav-register-btn">Register Now</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
