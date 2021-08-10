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
 * Select cart item count
 */
export const selectCartItemCount = createSelector([selectCartItems], (items) =>
  items.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0,
  ),
);

/**
 * Select cart restaurant
 */
export const selectCartRestaurant = createSelector(
  [selectCartState],
  (state) => state.restaurant,
);

/**
 * Select sub total
 */
export const selectCartSubTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0,
    ),
);

/**
 * Select delivery fee
 */
export const selectCartDeliveryFee = createSelector(
  [selectCartRestaurant],
  (restaurant) => (restaurant ? restaurant.deliveryFee : 0),
);

/**
 * Select grand total
 */
export const selectCartGrandTotal = createSelector(
  [selectCartSubTotal, selectCartDeliveryFee],
  (subTotal, deliveryFee) => subTotal + deliveryFee,
);
