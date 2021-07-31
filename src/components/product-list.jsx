import React from 'react';
import ProductItem from './product-item';

export default function ProductList() {
  const categoryTitle = 'Starters';
  return (
    <section className="product-list">
      <div className="product-filters">
        {[
          { id: 'starter', type: 'Starters' },
          { id: 'main', type: 'Main course' },
          { id: 'wrap', type: 'Wraps' },
          { id: 'snack', type: 'Snacks' },
          { id: 'beverage', type: 'Beverages' },
          { id: 'salad', type: 'Salads' },
        ].map((category) => (
          <div className="product-filter">{category.type}</div>
        ))}
      </div>
      <div className="products">
        <div className="category-header">{categoryTitle}</div>
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <>
            <ProductItem key={n} />
          </>
        ))}
      </div>
    </section>
  );
}
