import { createSelector } from '@reduxjs/toolkit';

/**
 * Select customer state
 */
const selectCustomerState = (state) => state.customer;

/**
 * Select customer ID
 */
export const selectCustomerId = createSelector(
  [selectCustomerState],
  (customer) => customer.id,
);

/**
 * Select customer full name
 */
export const selectCustomerFullname = createSelector(
  [selectCustomerState],
  (customer) =>
    [customer.firstName, customer.lastName].filter(Boolean).join(' '),
);

/**
 * Select state: customer logged in?
 */
export const selectCustomerIsLoggedIn = createSelector(
  [selectCustomerId],
  (id) => !!id,
);

/**
 * Select customer mobile
 */
export const selectCustomerMobile = createSelector(
  [selectCustomerState],
  (customer) => customer.mobile,
);

/**
 * Select customer email
 */
export const selectCustomerEmail = createSelector(
  [selectCustomerState],
  (customer) => customer.email,
);
