import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal">
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>ABOUT TEDx<span className="ted-red">KCT</span></h2>
            <p className="about-text" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              TEDxKCT is an independently organized TED event hosted at Kumaraguru College of Technology. 
              Our mission is to bring together visionary thinkers, innovators, and leaders to spark deep conversations 
              and connections.
            </p>
            <h2 className="section-title" style={{ marginTop: '3rem', fontSize: '2.5rem' }}>ABOUT <span className="ted-red">KCT</span></h2>
            <p className="about-text" style={{ textAlign: 'left' }}>
              Kumaraguru College of Technology (KCT), Coimbatore is an autonomous engineering college, established in 1984. 
              It is known for its excellent academic culture, vibrant campus life, and deep commitment to social responsibility and innovation. 
            </p>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <a href="https://kct.ac.in" target="_blank" rel="noreferrer" className="btn" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>VISIT KCT</a>
            </div>
          </div>
          <div className="about-theme glass-panel reveal" style={{ animationDelay: '0.2s' }}>
            <h3 className="theme-title">LIVING THROUGH <span className="ted-red">VUCA</span></h3>
            <p className="theme-text">
              We are living in a time where the world doesn't always move in predictable ways. 
              Things change quickly, outcomes are uncertain, and what once felt stable now often feels unclear.
            </p>
            <p className="theme-text">
              This is the reality we call <strong>VUCA</strong> — a world shaped by 
              <em> Volatility, Uncertainty, Complexity, and Ambiguity</em>.
            </p>
            <p className="theme-text">
              Living Through VUCA is about exploring these questions through real experiences and perspectives. 
              It brings together voices from different fields who are navigating change in their own ways — 
              not by simplifying it, but by learning how to move through it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
