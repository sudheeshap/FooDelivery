import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';

import CartItem from './CartItem';
import Button from './Button';

export default function Cart({ details, addItem, removeItem, clearItem }) {
  const history = useHistory();

  /**
   * Clicked on checkout button
   */
  const handleClickCheckout = () => {
    history.push('/checkout');
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <h3 className="cart__title">Your Cart</h3>
        {details.restaurant && (
          <div className="cart__subtitle">{details.restaurant.name}</div>
        )}
      </div>

      {details.items.length === 0 && (
        <div className="cart__empty-box">
          <div>
            <i className="icon bi-bag" />
          </div>
          <div>No items added yet</div>
        </div>
      )}
      {details.items.length > 0 && (
        <div className="cart__item-list">
          {details.items.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              addItem={addItem}
              removeItem={removeItem}
              clearItem={clearItem}
            />
          ))}
        </div>
      )}
      {details.restaurant && details.items.length > 0 && (
        <div className="cart__amount-container">
          <h5 className="cart__delivery-amount">
            <span>Delivery fee</span>
            <span
              className={
                details.restaurant.deliveryFee === 0
                  ? 'cart__text-highlight'
                  : ''
              }
            >
              {details.restaurant.deliveryFee > 0
                ? `AED ${details.restaurant.deliveryFee}`
                : 'Free'}
            </span>
          </h5>
          <h5 className="cart__subtotal">
            <span>Subtotal</span>
            <span>AED {details.subTotal}</span>
          </h5>
          <h3 className="cart__total">
            <span>Total</span>
            <span>AED {details.grandTotal}</span>
          </h3>
        </div>
      )}
      {details.isEnabledCheckout && (
        <div className="cart__button-container">
          <Button
            hasShadow
            size="lg"
            color="success"
            disabled={details.items.length === 0}
            onClick={handleClickCheckout}
          >
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  details: PropTypes.instanceOf(Object).isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired,
};
