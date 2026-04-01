import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>О нас</h4>
            <ul>
              <li><a href="#">Пункты выдачи</a></li>
              <li><a href="#">Вакансии</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Пользователям</h4>
            <ul>
              <li><a href="#">Связаться с нами</a></li>
              <li><a href="#">Вопрос - Ответ</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Для предпринимателей</h4>
            <ul>
              <li><a href="#">Продавайте на Uzum</a></li>
              <li><a href="#">Вход для продавцов</a></li>
              <li><a href="#">Открыть пункт выдачи</a></li>
            </ul>
          </div>
          
          <div className="footer-col apps-socials">
            <h4>Скачать приложение</h4>
            <div className="app-buttons">
              <button className="store-btn">AppStore</button>
              <button className="store-btn">Google Play</button>
            </div>
            
            <h4 style={{marginTop: '24px'}}>Uzum в соцсетях</h4>
            <div className="social-icons">
              <span className="icon">📸</span>
              <span className="icon">✈️</span>
              <span className="icon">👤</span>
              <span className="icon">▶️</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="policy-links">
            <a href="#">Соглашение о конфиденциальности</a>
            <a href="#">Пользовательское соглашение</a>
          </div>
          <div className="copyright">
            «2026© OOO «UZUM MARKET». ИНН 309376127. Все права защищены»
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
