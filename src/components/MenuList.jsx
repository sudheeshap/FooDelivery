import React from 'react';
import { PropTypes } from 'prop-types';

import ProductCard from './ProductCard';
import { scrollToElement } from '../services/browser.service';

export default function MenuList({
  menuGroups,
  selectedGroupId,
  addProduct,
  selectGroup,
}) {
  const productRefs = [];

  /*
   * Handle group button click
   */
  const handleClickGroup = (group, index) => {
    scrollToElement(productRefs[index]);
    selectGroup(group.id);
  };

  /*
   * Callback for the group header refs
   */
  const refCallback = (index, rf) => {
    productRefs[index] = rf;
  };

  return (
    <section className="menu-list">
      <div className="menu-filters">
        {menuGroups.map((group, index) => (
          <div
            className={`menu-filter ${
              selectedGroupId === group.id ? 'menu-filter--active' : ''
            }`}
            key={group.id}
            onClick={() => handleClickGroup(group, index)}
            onKeyDown={() => handleClickGroup(group, index)}
            role="button"
            tabIndex="-1"
          >
            {group.name}
          </div>
        ))}
      </div>
      <div className="products">
        {menuGroups.map((group, index) => (
          <React.Fragment key={group.id}>
            <div
              className="group-header"
              ref={(pRef) => refCallback(index, pRef)}
            >
              {group.name}
            </div>
            {group.products.map((product) => (
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
  selectedGroupId: PropTypes.string.isRequired,
  addProduct: PropTypes.func.isRequired,
  selectGroup: PropTypes.func.isRequired,
};
