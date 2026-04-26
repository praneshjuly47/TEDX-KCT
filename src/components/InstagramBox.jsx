import React from 'react';
import { ArrowRight } from 'lucide-react';
import './InstagramBox.css';

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

const InstagramBox = () => {
  return (
    <section className="section insta-section">
      <div className="container">
        <div className="insta-card glass-panel reveal">
          <div className="insta-content">
            <div className="insta-icon-wrapper">
              <InstagramIcon size={48} className="insta-icon" />
            </div>
            <div className="insta-text">
              <h2 className="insta-title">Follow Us on Instagram</h2>
              <p className="insta-handle">@tedxkct</p>
              <p className="insta-desc">Stay updated with the latest announcements, speaker reveals, and behind-the-scenes action.</p>
            </div>
          </div>
          <a href="https://www.instagram.com/tedxkct" target="_blank" rel="noreferrer" className="btn insta-btn">
            View Profile <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramBox;
