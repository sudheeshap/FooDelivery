import React from 'react';
import { PropTypes } from 'prop-types';

export default function CartItem({ item }) {
  return (
    <div className="cart__item">
      <div className="cart__item-name">{item.name}</div>

      <div className="cart__item-actions">
        <div className="cart__item-amount">
          <span>AED </span>
          <span>{item.price}</span>
        </div>
        <div className="cart__counter">
          <span className="cart__counter-button">
            <i className="icon bi-dash-circle" />
          </span>
          <span className="cart__counter-quantity">{item.quantity}</span>
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

CartItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};
