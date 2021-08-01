import React from 'react';
import { PropTypes } from 'prop-types';
import ProductCard from './product-card';

export default function MenuList({ menuGroups }) {
  return (
    <section className="menu-list">
      <div className="menu-filters">
        {menuGroups.map((category) => (
          <div className="menu-filter">{category.name}</div>
        ))}
      </div>
      <div className="products">
        {menuGroups.map((category) => (
          <>
            <div className="category-header">{category.name}</div>
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        ))}
      </div>
    </section>
  );
}

MenuList.propTypes = {
  menuGroups: PropTypes.instanceOf(Array).isRequired,
};
