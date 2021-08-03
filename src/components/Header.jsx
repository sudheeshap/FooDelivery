import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isLoggedIn] = useState(false);

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
            <div className={`navbar__cart ${isLoggedIn ? '' : 'navbar__cart--disabled'}`}>
              <i className="bi-bag" />
            </div>
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
              <span className="navbar__link">Login</span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
