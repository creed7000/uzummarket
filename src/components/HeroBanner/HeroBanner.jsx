import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="container">
        {/* Banner */}
        <div className="banner">
          <div className="banner-content">
            <h1 style={{color: 'white', fontSize: '42px', fontWeight: 700, margin: '20px 0'}}>
              Быстрая уборка до <span style={{color: '#FFE100'}}>20%</span><br />
              без лишних усилий
            </h1>
          </div>
          <button className="nav-btn prev">❮</button>
          <button className="nav-btn next">❯</button>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <a href="#" className="quick-link">
            <span className="emoji">🧸</span>
            <span>Детский мир</span>
          </a>
          <a href="#" className="quick-link highlight">
            <span className="emoji">✅</span>
            <span>Гарантия низких цен</span>
          </a>
          <a href="#" className="quick-link">
            <span className="emoji">🧥</span>
            <span>Модный базар</span>
          </a>
          <a href="#" className="quick-link">
            <span className="emoji">🧺</span>
            <span>Весенняя ярмарка</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
