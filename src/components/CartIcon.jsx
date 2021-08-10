import React from 'react';
import { PropTypes } from 'prop-types';

export default function CartIcon({ count }) {
  return (
    <div className={`cart__icon ${count === 0 ? 'cart__icon--disabled' : ''}`}>
      <i className="bi-bag" />
      {count > 0 && <span className="cart__icon-count">{count}</span>}
    </div>
  );
}

CartIcon.propTypes = {
  count: PropTypes.number.isRequired,
};
