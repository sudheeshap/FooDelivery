import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../components/FormInput';
import Button from '../components/Button';

const LoginPage = () => {
  const [state, setState] = useState({ email: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
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

          <Button type="submit" color="primary" hasShadow>
            Login
          </Button>

          <div>
            <span>Don&apos;t have an account?</span>
            <Link to="/register" className="login__link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
