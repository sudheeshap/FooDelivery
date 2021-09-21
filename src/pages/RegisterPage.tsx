import React, { SyntheticEvent, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import FormInput from '../components/shared/form-input/FormInput';
import Button from '../components/shared/button/Button';
import { useAuth } from '../hooks/useAuth';
import CustomerModel from '../models/customer.model';

const RegisterPage = () => {
  const { register, isLoading } = useAuth();
  const history = useHistory();
  const { search } = useLocation();
  const redirectFrom = new URLSearchParams(search).get('redirect_from') || '';

  const initialState = {
    ...new CustomerModel(),
  };
  const [state, setState] = useState(initialState);

  /**
   * Handle form submit
   */
  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    register(state).then((response) => {
      if (response) {
        history.push(`/${redirectFrom}`);
      }
    });
  };

  /**
   * Handle input change
   */
  const handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { value, name } = event.target as HTMLInputElement;

    setState({ ...state, [name]: value });
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h3 className="register-title">Create an account</h3>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form__field-group">
            <FormInput
              name="firstName"
              type="text"
              value={state.firstName}
              placeholder="First name"
              onChange={handleInputChange}
              required
            />
            <FormInput
              name="lastName"
              type="text"
              value={state.lastName}
              placeholder="Last name"
              onChange={handleInputChange}
              required
            />
          </div>
          <FormInput
            name="mobile"
            type="text"
            value={state.mobile}
            placeholder="Mobile"
            onChange={handleInputChange}
            required
          />
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
          <FormInput
            name="passwordConfirm"
            type="password"
            value={state.passwordConfirm}
            placeholder="Confirm password"
            onChange={handleInputChange}
            required
          />

          <Button type="submit" color="primary" isLoading={isLoading}>
            Create your account
          </Button>

          <div>
            <span>Already have an account?</span>
            <Link to="/login" className="register__link">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
