import React from 'react';
import { PropTypes } from 'prop-types';

export default function Cart({ items }) {
  const subTotal = items.reduce((accumulator, total) => total + accumulator, 0);
  const deliveryFee = 0;
  const total = subTotal + deliveryFee;
  const newItems = [
    { quantity: 1, amount: 10, name: 'Yogurt and granola' },
    { quantity: 1, amount: 20, name: 'Cinnamon Apple Protein Pancakes 2 Pieces' },
  ];
  return (
    <div className="cart">
      <h2 className="cart__title">Your cart</h2>
      {newItems.length === 0 && (
        <div className="cart__empty-box">
          <div>
            <i className="icon bi-bag" />
          </div>
          <div>No items added yet</div>
        </div>
      )}
      {newItems.length > 0 && (
        <div className="cart__item-list">
          {newItems.map((item) => (
            <div className="cart__item">
              <div className="cart__item-name">{item.name}</div>

              <div className="cart__item-actions">
                <div className="cart__item-amount">
                  <span>AED </span>
                  <span>{item.quantity * item.amount}</span>
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
          ))}
        </div>
      )}
      <div className="cart__amount-container">
        <h4 className="cart__delivery-amount">
          <span>Delivery fee</span>
          <span className={deliveryFee === 0 && 'cart__text-highlight'}>
            {deliveryFee > 0 ? deliveryFee : 'Free'}
          </span>
        </h4>
        <h4 className="cart__subtotal">
          <span>Subtotal</span>
          <span>{subTotal}</span>
        </h4>
        <h3 className="cart__total">
          <span>Total</span>
          <span>{total}</span>
        </h3>
      </div>
      <div className="cart__button-container">
        <button
          type="button"
          className="form__button form__button--lg form__button--green form__button--shadow"
          disabled={newItems.length === 0 && 'disabled'}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

Cart.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};
