import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectCustomerIsLoggedIn } from '../redux/customer/customer.selectors';

export default function Checkout() {
  const isLoggedIn = useSelector(selectCustomerIsLoggedIn);

  if (isLoggedIn) {
    return <div>Hello Checkout</div>;
  }

  return <Redirect to="/signin" />;
}
