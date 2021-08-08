import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import ProductCard from './ProductCard';
import { addItem } from '../redux/cart/cart.reducer';
import CartItem from './CartItem';

export default function MenuList({ menuGroups }) {
  const dispatch = useDispatch();

  /**
   * Handle add product
   */
  const handleAddProduct = (product) => {
    const cartItem = new CartItem();
    cartItem.id = product.id;
    cartItem.product = product;

    dispatch(addItem({ item: cartItem }));
  };

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
                onAdd={() => handleAddProduct(product)}
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
};
