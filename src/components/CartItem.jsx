import React from 'react';
import { PropTypes } from 'prop-types';

export default function CartItem({ name, quantity, price }) {
  return (
    <div className="cart__item">
      <div className="cart__item-name">{name}</div>

      <div className="cart__item-actions">
        <div className="cart__item-amount">
          <span>AED </span>
          <span>{quantity * price}</span>
        </div>
        <div className="cart__counter">
          <span className="cart__counter-button">
            <i className="icon bi-dash-circle" />
          </span>
          <span className="cart__counter-quantity">{quantity}</span>
          <span className="cart__counter-button">
            <i className="icon bi-plus-circle" />
          </span>
        </div>
        <div className="cart__item-remove">
          <i className="icon bi-x-square" />
        </div>
      </div>
    </div>
  );
}

CartItem.defaultProps = {
  price: 0,
  quantity: 1,
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  price: PropTypes.number,
};
