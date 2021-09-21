import React, { MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import {
  selectCartItemCount,
  selectCartRestaurant,
} from '../../../redux/cart/cart.selectors';
import { selectCustomerIsLoggedIn } from '../../../redux/customer/customer.selectors';
import { useAuth } from '../../../hooks/useAuth';
import CartIcon from '../../CartIcon';

export default function Header() {
  const { logout } = useAuth();
  const history = useHistory();

  const cartItemCount = useSelector(selectCartItemCount);
  const cartRestaurant = useSelector(selectCartRestaurant);
  const isLoggedIn = useSelector(selectCustomerIsLoggedIn);

  /**
   * Clicked on logout button
   */
  const handleClickLogout = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    // Logout customer
    logout();
  };

  /**
   * Clicked on cart icon
   */
  const handleClickCart = () => {
    history.push(`/restaurant/${cartRestaurant.slug}`);
  };

  return (
    <header className="header">
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
          {isLoggedIn ? (
            <div className="navbar__item">
              {/* <div
                className="navbar__user"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                }}
              >
                <img alt="" />
              </div> */}
              <a
                href="/"
                className="navbar__link"
                data-testid="link-logout"
                onClick={handleClickLogout}
              >
                Logout
              </a>
            </div>
          ) : (
            <div className="navbar__item">
              <Link
                to="/login"
                className="navbar__link"
                data-testid="link-login"
              >
                Login
              </Link>
            </div>
          )}

          <div className="navbar__item">
            <CartIcon
              count={cartItemCount}
              onClick={handleClickCart}
              data-testid="link-cart"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
