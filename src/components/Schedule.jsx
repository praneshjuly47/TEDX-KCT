import React from 'react';
import './Schedule.css';

const scheduleData = [
  { time: '09:00 – 09:30 AM', title: 'Registration Desk & Audience Arrival', subtitle: 'Guest check-in, ID distribution, seating assistance', type: 'break' },
  { time: '09:30 – 10:00 AM', title: 'Opening Ceremony', subtitle: 'Welcome address, introduction to the event theme', type: 'event' },
  { time: '10:00 – 10:20 AM', title: 'Mr. Arvind Sundararajan', subtitle: 'Contemporary Artist | ❝ When Math Meets Art', type: 'talk' },
  { time: '10:20 – 10:25 AM', title: 'Q&A', type: 'break' },
  { time: '10:25 – 10:45 AM', title: 'Ms. Nibha Namboodiri', subtitle: 'Conservationist — Ecology & Cultural Systems Practitioner | ❝ Reclaiming Inner Boundaries in a Controlled World', type: 'talk' },
  { time: '10:45 – 10:50 AM', title: 'Q&A', type: 'break' },
  { time: '10:50 – 11:10 AM', title: 'Tea Break', type: 'break' },
  { time: '11:15 – 11:35 AM', title: 'Dr. Stanly Johny', subtitle: 'Journalist & International Affairs Expert — The Hindu | ❝ Viral Truths, Viral Lies', type: 'talk' },
  { time: '11:35 – 11:40 AM', title: 'Q&A', type: 'break' },
  { time: '11:40 AM – 12:00 PM', title: 'Padma Shri Kalaimamani Dr. Narthaki Nataraj', subtitle: 'Member — State Planning Commission, Tamil Nadu Government | ❝ Finding Discipline in Chaos', type: 'talk' },
  { time: '12:00 – 12:05 PM', title: 'Q&A', type: 'break' },
  { time: '12:05 – 01:10 PM', title: 'Lunch & Group Photo', type: 'event' },
  { time: '01:15 – 01:35 PM', title: 'Mr. Sabari Venkat', subtitle: 'Motivational Speaker & Social Impact Advocate | ❝ Resilience and the Demand for Change', type: 'talk' },
  { time: '01:35 – 01:40 PM', title: 'Q&A', type: 'break' },
  { time: '01:40 – 02:00 PM', title: 'Ms. Radhika Shapoorjee', subtitle: 'Founder & CEO, Mediation Mantras | ❝ The Trust Dividend: Repairing Connection in a VUCA World', type: 'talk' },
  { time: '02:00 – 02:05 PM', title: 'Q&A', type: 'break' },
  { time: '02:05 – 02:25 PM', title: 'Dr. Sanjay Molur', subtitle: 'Executive Director — Zoo Outreach Organisation | ❝ Nature at the Edge', type: 'talk' },
  { time: '02:25 – 02:30 PM', title: 'Q&A', type: 'break' },
  { time: '02:30 – 03:00 PM', title: 'Vote of Thanks & Official Closing', type: 'event' },
];

const Schedule = () => {
  return (
    <section className="section schedule-section" id="schedule">
      <div className="container">
        <h2 className="section-title reveal">Schedule</h2>
        
        <div className="timeline">
          {scheduleData.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item reveal ${item.type}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-marker"></div>
              <div className="timeline-content glass-panel">
                <h3 className="timeline-title">{item.title}</h3>
                {item.subtitle && <p className="timeline-subtitle">{item.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
