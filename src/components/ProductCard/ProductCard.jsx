import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} className="product-image" />
        <button className="favorite-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        {product.originalBadge && (
          <span className="badge-original">✅ ОРИГИНАЛ</span>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        
        <div className="product-rating">
          <span className="star">★</span>
          <span className="rating-score">{product.rating}</span>
          <span className="reviews">({product.reviews} отзывов)</span>
        </div>

        <div className="product-price-section">
          {product.oldPrice && (
            <div className="old-price">{product.oldPrice}</div>
          )}
          <div className="current-price">{product.price}</div>
          
          <div className="monthly-badge">
            {product.monthlyPrice} сум/мес
          </div>
        </div>

        <button className="add-cart-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 14.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm2.5-4a2.5 2.5 0 0 1-5 0V7a2.5 2.5 0 0 1 5 0Z"></path></svg>
          Завтра
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
