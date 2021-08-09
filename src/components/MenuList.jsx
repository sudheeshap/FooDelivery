import React from 'react';
import { PropTypes } from 'prop-types';

import ProductCard from './ProductCard';

export default function MenuList({ menuGroups, addProduct }) {
  return (
    <section className="menu-list">
      <div className="menu-filters">
        {menuGroups.map((category) => (
          <div className="menu-filter" key={category.id}>
            {category.name}
          </div>
        ))}
      </div>
      <div className="products">
        {menuGroups.map((category) => (
          <React.Fragment key={category.id}>
            <div className="category-header">{category.name}</div>
            {category.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addProduct={addProduct}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

MenuList.propTypes = {
  menuGroups: PropTypes.instanceOf(Array).isRequired,
  addProduct: PropTypes.func.isRequired,
};
