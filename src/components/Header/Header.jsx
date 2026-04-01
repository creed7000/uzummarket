import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container header-top-inner">
          <div className="location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Ташкент</span>
            <span className="dot">•</span>
            <a href="#">Пункты выдачи</a>
          </div>
          <div className="top-links">
            <a href="#" className="seller-link">Стать продавцом</a>
            <span className="separator"></span>
            <a href="#">Открыть пункт выдачи</a>
            <span className="separator"></span>
            <a href="#">Вопрос-ответ</a>
            <span className="separator"></span>
            <a href="#">Мои заказы</a>
            <div className="lang-switcher">
              <img src="https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" alt="RU" width="16" className="lang-flag" />
              <span>Русский</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="header-main">
        <div className="container header-main-inner">
          <a href="/" className="logo">
            <span className="logo-uzum">uzum</span>
            <span className="logo-market">market</span>
          </a>

          <button className="catalog-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary)"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
            <span>Каталог</span>
          </button>

          <div className="search-bar">
            <input type="text" placeholder="Искать товары и категории" />
            <button className="search-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </div>

          <div className="user-actions">
            <button className="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>Войти</span>
            </button>
            <button className="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <span>Избранное</span>
            </button>
            <button className="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span>Корзина</span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Sub-nav */}
      <div className="header-nav">
        <div className="container header-nav-inner">
          <ul className="category-list">
            <li><a href="#" className="deal-link">🔥 Товары недели</a></li>
            <li><a href="#">🌸 Весенняя коллекция</a></li>
            <li><a href="#">💄 Ваша красота</a></li>
            <li><a href="#">🎨 Хобби и творчество</a></li>
            <li><a href="#">📱 Смартфоны</a></li>
            <li><a href="#">🛍️ Весенняя ярмарка</a></li>
            <li><a href="#">Мебель</a></li>
            <li><a href="#">Туризм, рыбалка и охота</a></li>
            <li><a href="#">Кухня</a></li>
            <li>
              <button className="more-btn">
                Ещё
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
