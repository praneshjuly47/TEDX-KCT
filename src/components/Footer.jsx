import React from 'react';
import './Footer.css';
import { Phone, Mail, MapPin } from 'lucide-react';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer-section" id="footer">
      <div className="container footer-grid">
        
        {/* Left Column: Branding & Info */}
        <div className="footer-brand">
          <div className="footer-logos">
            <h2 className="footer-tedx"><span className="ted-red">TEDx</span>KCT</h2>
            <div className="footer-kct-logo">
              <img src={`${import.meta.env.BASE_URL}KCT.png`} alt="KCT Logo" />
              <span>Kumaraguru College of Technology</span>
            </div>
          </div>
          <p className="footer-desc">
            This independent TEDx event is operated under license from TED to Kumaraguru College of Technology. 
            Bringing inspiring ideas to Coimbatore in the spirit of TED — Ideas worth spreading.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.5rem' }}>
            <p style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: 600 }}>KCT Website:</span>
              <a href="https://kct.ac.in/" target="_blank" rel="noreferrer" className="footer-link">kct.ac.in</a>
            </p>
            <p style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: 600 }}>Instagram:</span>
              <a href="https://www.instagram.com/tedxkct" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <InstagramIcon size={18} /> @tedxkct
              </a>
            </p>
          </div>
        </div>

        {/* Middle Column: Contact */}
        <div className="footer-contact">
          <h3 className="footer-heading">GET IN TOUCH</h3>
          
          <div className="contact-item">
            <Phone size={18} className="ted-red" />
            <div>
              <p><a href="tel:+919361105343" style={{ color: 'inherit', textDecoration: 'none' }}>+91 93611 05343 (Allwin Kenneth P)</a></p>
            </div>
          </div>
          
          <div className="contact-item">
            <Mail size={18} className="ted-red" />
            <a href="mailto:allwinkenneth.24mba@kct.ac.in">allwinkenneth.24mba@kct.ac.in</a>
          </div>

          <div className="contact-item venue-item" style={{ marginTop: '1.5rem' }}>
            <MapPin size={18} className="ted-red" />
            <div>
              <h4 style={{ color: 'white', marginBottom: '0.2rem' }}>Venue</h4>
              <p>SKT Auditorium</p>
              <p>Kumaraguru Campus, Coimbatore</p>
            </div>
          </div>
        </div>

        {/* Right Column: Map */}
        <div className="footer-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846.2058250455851!2d76.98921459864526!3d11.076849373534724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f71ffb8ee6c9%3A0x30b5e20c0be62b78!2sSKT%20-%20Sarabhai%20Kalam%20Theatre!5e1!3m2!1sen!2sin!4v1777220181146!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '8px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SKT Auditorium Map"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; {new Date().getFullYear()} TEDxKCT. This independent TEDx event is operated under license from TED to Kumaraguru College of Technology.</p>
          <p>Organized by Kumaraguru College of Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
