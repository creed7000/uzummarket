import React from 'react';
import { 
  MapPin, 
  User, 
  Heart, 
  ShoppingBag, 
  Search, 
  Menu,
  ChevronDown
} from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Top Bar - Hidden on Mobile */}
      <div className="header-top hidden-mobile">
        <div className="container header-top-inner">
          <div className="location">
            <MapPin size={14} />
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
          <div className="header-main-left">
            <a href="/" className="logo">
              <span className="logo-uzum">uzum</span>
              <span className="logo-market">market</span>
            </a>
            
            <button className="catalog-btn hidden-mobile">
              <div className="catalog-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>Каталог</span>
            </button>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Искать товары и категории" />
            <button className="search-btn">
              <Search size={18} />
            </button>
          </div>

          <div className="user-actions hidden-mobile">
            <button className="action-btn">
              <User size={20} />
              <span>Войти</span>
            </button>
            <button className="action-btn">
              <Heart size={20} />
              <span>Избранное</span>
            </button>
            <button className="action-btn">
              <ShoppingBag size={20} />
              <span>Корзина</span>
            </button>
          </div>

          {/* Mobile Catalog Trigger - Only on mobile */}
          <button className="mobile-catalog-btn show-mobile">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Categories Sub-nav - Hidden/Scrollable on Mobile */}
      <div className="header-nav">
        <div className="container header-nav-inner">
          <ul className="category-list">
            <li><a href="#" className="deal-link">🔥 Товары недели</a></li>
            <li><a href="#">🌸 Весенняя коллекция</a></li>
            <li><a href="#">💄 Ваша красота</a></li>
            <li><a href="#">🎨 Хобби и творчество</a></li>
            <li><a href="#">📱 Смартфоны</a></li>
            <li><a href="#">🛍️ Весенняя ярмарка</a></li>
            <li className="hidden-mobile"><a href="#">Мебель</a></li>
            <li className="hidden-mobile"><a href="#">Туризм, рыбалка и охота</a></li>
            <li className="hidden-mobile"><a href="#">Кухня</a></li>
            <li>
              <button className="more-btn">
                Ещё
                <ChevronDown size={12} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
