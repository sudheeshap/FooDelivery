import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CartIcon from './CartIcon';
import { selectCartItemCount } from '../redux/cart/cart.selectors';

export default function Header() {
  const [isLoggedIn] = useState(false);
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar__section">
          <div className="navbar__item">
            <Link to="/">
              <img
                className="navbar__logo"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </Link>
          </div>
        </div>
        <div className="navbar__section">
          <div className="navbar__item">
            <CartIcon count={cartItemCount} />
          </div>

          {isLoggedIn ? (
            <div className="navbar__item">
              <div
                className="navbar__user"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                }}
              >
                <img alt="" />
              </div>
            </div>
          ) : (
            <div className="navbar__item">
              <Link to="/login" className="navbar__link">
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
