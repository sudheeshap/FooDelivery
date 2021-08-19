import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import Button from '../components/shared/button/Button';
import Cart from '../components/Cart';
import { addItem, clearItem, removeItem } from '../redux/cart/cart.reducer';
import {
  selectCartGrandTotal,
  selectCartItems,
  selectCartRestaurant,
  selectCartSubTotal,
} from '../redux/cart/cart.selectors';
import {
  selectCustomerFullname,
  selectCustomerIsLoggedIn,
} from '../redux/customer/customer.selectors';

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoggedIn = useSelector(selectCustomerIsLoggedIn);
  const cartRestaurant = useSelector(selectCartRestaurant);
  const customerFullname = useSelector(selectCustomerFullname);

  const cartItems = useSelector(selectCartItems);
  const subTotal = useSelector(selectCartSubTotal);
  const grandTotal = useSelector(selectCartGrandTotal);
  const cartDetails = {
    items: cartItems,
    restaurant: cartRestaurant,
    subTotal,
    grandTotal,
  };

  /**
   * Handle add cart item from cart list
   */
  const handleAddCartItem = (item) => {
    dispatch(addItem({ item }));
  };

  /**
   * Handle remove item quantity from cart list
   */
  const handleRemoveCartItem = (item) => {
    dispatch(removeItem({ item }));
  };

  /**
   * Handle clear item
   */
  const handleClearCartItem = (item) => {
    dispatch(clearItem({ item }));
  };

  /**
   * Clicked on place order button
   */
  const handleClickPlaceOrder = () => {
    history.push('/delivery');
  };

  if (isLoggedIn) {
    return (
      <>
        <h2 className="checkout__title">Checkout</h2>
        <div className="checkout__container">
          <Cart
            details={cartDetails}
            addItem={handleAddCartItem}
            removeItem={handleRemoveCartItem}
            clearItem={handleClearCartItem}
          />
          <div className="checkout__details-container">
            <section className="checkout__address-container">
              <h4>Address</h4>
              {customerFullname && (
                <div className="checkout__card">{`${customerFullname}'s address`}</div>
              )}
              <div className="checkout__card">TODO</div>
            </section>
            <section className="checkout__payment-container">
              <h4>Payment</h4>
              <div className="checkout__card">TODO</div>
              <div className="checkout__card">TODO</div>
            </section>
            <section className="checkout__payment-button-wrapper">
              <Button
                color="primary"
                size="lg"
                hasShadow
                onClick={handleClickPlaceOrder}
              >
                Place order
              </Button>
            </section>
          </div>
        </div>
      </>
    );
  }

  return <Redirect to="/login?redirect_from=checkout" />;
}
