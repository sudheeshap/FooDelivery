import React from 'react';
import { PropTypes } from 'prop-types';
import CartItem from './CartItem';

export default function Cart({
  items,
  restaurantName,
  deliveryFee,
  subTotal,
  grandTotal,
}) {
  // const total = subTotal + deliveryFee;
  // const newItems = [
  //   { id: 1, quantity: 1, amount: 10, name: 'Yogurt and granola' },
  //   {
  //     id: 2,
  //     quantity: 1,
  //     amount: 20,
  //     name: 'Cinnamon Apple Protein Pancakes 2 Pieces',
  //   },
  // ];

  // const subTotal = items.reduce((accumulator, total) => total + accumulator, 0);

  return (
    <div className="cart">
      <h2 className="cart__title">Your cart</h2>
      <div>{restaurantName}</div>
      {items.length === 0 && (
        <div className="cart__empty-box">
          <div>
            <i className="icon bi-bag" />
          </div>
          <div>No items added yet</div>
        </div>
      )}
      {items.length > 0 && (
        <div className="cart__item-list">
          {items.map((item) => (
            <CartItem
              quantity={item.quantity}
              price={item.product.price}
              name={item.product.name}
              key={item.id}
            />
          ))}
        </div>
      )}
      <div className="cart__amount-container">
        <h4 className="cart__delivery-amount">
          <span>Delivery fee</span>
          <span className={deliveryFee === 0 ? 'cart__text-highlight' : ''}>
            {deliveryFee > 0 ? deliveryFee : 'Free'}
          </span>
        </h4>
        <h4 className="cart__subtotal">
          <span>Subtotal</span>
          <span>{subTotal}</span>
        </h4>
        <h3 className="cart__total">
          <span>Total</span>
          <span>{grandTotal}</span>
        </h3>
      </div>
      <div className="cart__button-container">
        <button
          type="button"
          className="form__button form__button--lg form__button--green form__button--shadow"
          disabled={items.length === 0 && 'disabled'}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

Cart.defaultProps = {
  deliveryFee: 0,
  subTotal: 0,
  grandTotal: 0,
};

Cart.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  subTotal: PropTypes.number,
  grandTotal: PropTypes.number,
  deliveryFee: PropTypes.number,
  items: PropTypes.instanceOf(Array).isRequired,
};
