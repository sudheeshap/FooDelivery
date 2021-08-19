import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import FormInput from '../components/FormInput';
import Button from '../components/button/Button';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const history = useHistory();
  const { search } = useLocation();
  const redirectFrom = new URLSearchParams(search).get('redirect_from') || '';
  const errors = {
    'auth/user-not-found': 'User not found',
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    login(state.email, state.password).then((response) => {
      if (response.user) {
        history.push(`/${redirectFrom}`);

        return;
      }

      setError(response.code);
    });
  };

  /**
   * Handle input change
   */
  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h3 className="login-title">Login</h3>

        <form onSubmit={handleSubmit} className="login-form">
          <FormInput
            name="email"
            type="email"
            value={state.email}
            placeholder="Email"
            onChange={handleInputChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={state.password}
            placeholder="Password"
            onChange={handleInputChange}
            required
          />

          <div className="form__error">{errors[error]}</div>

          <Button type="submit" color="primary" hasShadow isLoading={isLoading}>
            Login
          </Button>

          <div>
            <span>Don&apos;t have an account?</span>
            <Link
              to={`/register?redirect_from=${redirectFrom}`}
              className="login__link"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
