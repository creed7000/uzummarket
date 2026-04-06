import React from 'react';
import { Home, Search, ShoppingBag, Heart, User } from 'lucide-react';
import './MobileBottomNav.css';

const MobileBottomNav = ({ 
  activeTab, 
  onViewChange, 
  onModalOpen, 
  cartCount, 
  favoritesCount 
}) => {
  return (
    <nav className="mobile-bottom-nav show-mobile">
      <div 
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => onViewChange('home')}
      >
        <Home size={24} />
        <span>Главная</span>
      </div>
      <div 
        className={`nav-item ${activeTab === 'category' ? 'active' : ''}`}
        onClick={() => onViewChange('category')}
      >
        <Search size={24} />
        <span>Каталог</span>
      </div>
      <div 
        className={`nav-item relative ${activeTab === 'cart' ? 'active' : ''}`} 
        onClick={() => onModalOpen('cart')}
      >
        <ShoppingBag size={24} />
        <span>Корзина</span>
        {cartCount > 0 && (
          <span className="absolute top-1 right-4 bg-[#7000ff] text-white text-[9px] rounded-full min-w-[14px] h-[14px] flex items-center justify-center px-1 font-bold">
            {cartCount}
          </span>
        )}
      </div>
      <div 
        className={`nav-item relative ${activeTab === 'fav' ? 'active' : ''}`} 
        onClick={() => onModalOpen('fav')}
      >
        <Heart size={24} />
        <span>Избранное</span>
        {favoritesCount > 0 && (
          <span className="absolute top-1 right-4 bg-[#7000ff] text-white text-[9px] rounded-full min-w-[14px] h-[14px] flex items-center justify-center px-1 font-bold">
            {favoritesCount}
          </span>
        )}
      </div>
      <div 
        className={`nav-item ${activeTab === 'login' ? 'active' : ''}`} 
        onClick={() => onModalOpen('login')}
      >
        <User size={24} />
        <span>Кабинет</span>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
