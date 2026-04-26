import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // VUCA Particles
    const particles = [];
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        baseColor: `rgba(${Math.floor(Math.random() * 50 + 200)}, ${Math.floor(Math.random() * 40 + 20)}, ${Math.floor(Math.random() * 40 + 20)}, ${Math.random() * 0.5 + 0.2})` // Reds
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Complexity/Volatility effect
      particles.forEach(p => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction (Uncertainty resolving to focus)
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(230, 43, 30, ${1 - distance / 150})`;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.baseColor;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} id="vuca-canvas"></canvas>
      
      {/* Infinite scrolling marquee behind text, in front of canvas */}
      <div className="marquee-container">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div className="marquee-content" key={i}>
              {['Radhika', 'Nibha', 'Sabari', 'Arvind', 'Narthaki', 'Sanjay', 'Stanly'].map((name, index) => (
                <img src={`/speakers/${name}.jpg`} alt={name} key={`${i}-${index}`} className="marquee-img" />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-content container reveal active">
        <h2 className="hero-subtitle">Kumaraguru College of Technology</h2>
        <h1 className="hero-title"><span className="ted-red">TEDx</span>KCT</h1>
        <div className="theme-wrapper">
          <h3 className="hero-theme">LIVING THROUGH <span className="ted-red">VUCA</span></h3>
        </div>
        <p className="hero-date">28th April 2026 • 09:00 AM – 03:00 PM</p>
        <div className="hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://www.ted.com/tedx/events/61551" target="_blank" rel="noreferrer" className="btn btn-pulse">Register Now</a>
          <a href="#speakers" className="btn" style={{ background: 'transparent', border: '2px solid var(--ted-red)', animation: 'none' }}>View Speakers</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
