import React from 'react';
import { PropTypes } from 'prop-types';

export default function CartIcon({ count, onClick }) {
  return (
    <div
      className={`cart__icon ${count === 0 ? 'cart__icon--disabled' : ''}`}
      role="button"
      onClick={onClick}
      onKeyDown={onclick}
      tabIndex="0"
    >
      <i className="bi-bag" />
      {count > 0 && <span className="cart__icon-count">{count}</span>}
    </div>
  );
}

CartIcon.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
