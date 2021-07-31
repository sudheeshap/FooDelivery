import React from 'react';
import { PropTypes } from 'prop-types';

export default function Cart({ items }) {
  const subTotal = items.reduce((accumulator, total) => total + accumulator, 0);
  const deliveryFee = 0;
  const total = subTotal + deliveryFee;
  return (
    <div className="cart">
      <h2 className="cart__title">Your cart</h2>
      {items.length === 0 && (
        <div className="cart__empty-box">
          <div>
            <i className="icon bi-bag" />
          </div>
          <div>No items added yet</div>
        </div>
      )}
      {items.length > 0 && (
        <>
          <div className="cart__subtotal">
            <span>Subtotal</span>
            <span>{subTotal}</span>
          </div>
          <div className="cart__delivery-amount">
            <span>Delivery fee</span>
            <span>{deliveryFee}</span>
          </div>
          <h4 className="cart__total">{total}</h4>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};
