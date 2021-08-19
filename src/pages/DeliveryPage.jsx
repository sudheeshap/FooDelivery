import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../components/button/Button';
import { resetCart } from '../redux/cart/cart.reducer';

export default function DeliveryPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * Reset cart as the order is complete
   */
  useEffect(() => {
    dispatch(resetCart());
  }, []);

  /**
   * Clicked to continue order
   */
  const handleClickContinue = () => {
    history.push('/');
  };

  return (
    <div className="delivery__container">
      <div className="delivery__icon">
        <i className="bi-bag-check" />
      </div>
      <div className="delivery__description">
        Thank you for the order. Your delivery is on the way!
      </div>
      <Button
        color="success"
        hasShadow
        className="delivery__button"
        onClick={handleClickContinue}
      >
        More orders
      </Button>
    </div>
  );
}
