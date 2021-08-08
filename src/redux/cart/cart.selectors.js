import { createSelector } from '@reduxjs/toolkit';

/**
 * Select cart state
 */
const selectCartState = (state) => state.cart;

/**
 * Select cart items
 */
export const selectCartItems = createSelector(
  [selectCartState],
  (state) => state.items || [],
);

/**
 * Select sub total
 */
export const selectCartSubTotal = createSelector(
  [selectCartState],
  (state) => state.subTotal,
);

/**
 * Select grand total
 */
export const selectCartGrandTotal = createSelector(
  [selectCartState],
  (state) => state.grandTotal,
);
