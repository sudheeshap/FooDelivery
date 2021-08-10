import React from 'react';
import { PropTypes } from 'prop-types';

export default function CartItem({ item, addItem, removeItem, clearItem }) {
  return (
    <div className="cart__item">
      <div className="cart__item-name">{item.name}</div>

      <div className="cart__item-actions">
        <div className="cart__item-amount">
          <span>AED </span>
          <span>{item.price}</span>
        </div>
        <div className="cart__counter">
          <button
            type="button"
            className="cart__counter-button"
            onClick={() => removeItem(item)}
          >
            <i className="icon bi-dash-circle" />
          </button>
          <span className="cart__counter-quantity">{item.quantity}</span>
          <button
            type="button"
            className="cart__counter-button"
            onClick={() => addItem(item)}
          >
            <i className="icon bi-plus-circle" />
          </button>
        </div>
        <button
          type="button"
          tooltip="Remove from cart"
          className="cart__item-remove"
          onClick={() => clearItem(item)}
        >
          <i className="icon bi-x-square" />
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired,
};
