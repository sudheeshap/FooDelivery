import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../components/FormInput';
import Button from '../components/Button';

const RegisterPage = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    mobile: '',
    email: '',
  });

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
    <div className="register-wrapper">
      <div className="register-container">
        <h3 className="register-title">Create an account</h3>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form__field-group">
            <FormInput
              name="fname"
              type="text"
              value={state.fname}
              placeholder="First name"
              onChange={handleInputChange}
              required
            />
            <FormInput
              name="lname"
              type="text"
              value={state.lname}
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

          <Button type="submit" color="primary" hasShadow>
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
