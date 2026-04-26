import React, { useState } from 'react';
import './Speakers.css';
import { X } from 'lucide-react';

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

const speakersData = [
  {
    id: 4,
    name: 'Arvind Sundararajan',
    title: 'Contemporary Artist',
    image: `${import.meta.env.BASE_URL}speakers/Arvind.jpg`,
    bio: 'Arvind Sundararajan explores the intersection of Mathematics and Art. His work delves into how analytical thinking can inspire deeply creative visual expressions.',
    instagram: 'http://instagram.com/i_arvindsundar/'
  },
  {
    id: 7,
    name: 'Stanly Johny',
    title: 'International Affairs Editor - The Hindu',
    image: `${import.meta.env.BASE_URL}speakers/Stanly.jpg`,
    bio: 'Dr. Stanly Johny unravels "Viral Truths" and the complexity of global affairs in an era of information overload and geopolitical uncertainty.',
    instagram: 'https://www.instagram.com/stanlyjohnym/'
  },
  {
    id: 2,
    name: 'Nibha Namboodiri',
    title: 'Conservationist - Ecology & Culture Systems Practitioner',
    image: `${import.meta.env.BASE_URL}speakers/Nibha.jpg`,
    bio: 'Nibha Namboodiri is a cultural practitioner and conservationist discussing the concept of "Inner Boundaries" and our relationship with the natural world.',
    instagram: 'https://www.instagram.com/nibhanamboodiri/'
  },
  {
    id: 3,
    name: 'Sabari Venkat Sreenivas',
    title: 'National Awardee - Creativity',
    image: `${import.meta.env.BASE_URL}speakers/Sabari.jpg`,
    bio: 'Mr. Sabari Venkat is a disability rights advocate whose life story exemplifies resilience and overcoming seemingly insurmountable odds.',
    instagram: 'https://www.instagram.com/sabarivenkat_s/'
  },
  {
    id: 6,
    name: 'Sanjay Molur',
    title: 'Executive Director - Zoo Outreach Organisation',
    image: `${import.meta.env.BASE_URL}speakers/Sanjay.jpg`,
    bio: 'Dr. Sanjay Molur is a conservation biologist focusing on species survival and discussing "Nature at the Edge" in our rapidly changing ecosystem.',
    instagram: 'https://www.instagram.com/sanjay.molur/'
  },
  {
    id: 1,
    name: 'Radhika Shapoorjee',
    title: 'Co-Founder, Mediation Mantras',
    image: `${import.meta.env.BASE_URL}speakers/Radhika.jpg`,
    bio: 'Radhika Shapoorjee explores the "Trust Dividend" in a volatile world, highlighting how authentic communication builds resilient organizations.',
    instagram: 'https://www.instagram.com/rshapoorjee/'
  },
  {
    id: 5,
    name: 'Narthaki Nataraj',
    title: 'Member State Planning Commission',
    image: `${import.meta.env.BASE_URL}speakers/Narthaki.jpg`,
    bio: 'Dr. Narthaki Nataraj is a celebrated Bharatanatyam dancer and social advocate. She speaks on maintaining discipline and grace amidst chaos and societal challenges.',
    instagram: 'https://www.instagram.com/narthakinataraj/'
  }
];

const Speakers = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(null);

  return (
    <section className="section speakers-section" id="speakers">
      <div className="container">
        <h2 className="section-title reveal">Speakers</h2>
        
        <div className="speakers-grid">
          {speakersData.map((speaker, index) => (
            <div 
              key={speaker.id} 
              className="speaker-card reveal" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveSpeaker(speaker)}
            >
              {/* Only showing image as requested since it contains text/branding */}
              <img src={speaker.image} alt={speaker.name} className="speaker-img" />
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeSpeaker && (
          <div className="modal-overlay" onClick={() => setActiveSpeaker(null)}>
            <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setActiveSpeaker(null)}>
                <X size={24} />
              </button>
              <div className="modal-body">
                <img src={activeSpeaker.image} alt={activeSpeaker.name} className="modal-img" />
                <div className="modal-text">
                  <h3 className="modal-name serif-text">{activeSpeaker.name}</h3>
                  <p className="modal-title">{activeSpeaker.title}</p>
                  <div className="divider"></div>
                  <p className="modal-bio">{activeSpeaker.bio}</p>
                  
                  <a href={activeSpeaker.instagram} target="_blank" rel="noreferrer" className="speaker-insta-link">
                    <InstagramIcon size={20} />
                    <span>Follow on Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Speakers;
