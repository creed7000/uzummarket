import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductSection.css';

const ProductSection = ({ title, products }) => {
  return (
    <section className="product-section">
      <div className="container">
        <h2 className="section-title">
          {title}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"></path></svg>
        </h2>
        
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="show-more-wrapper">
          <button className="show-more-btn">Показать ещё 10</button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
