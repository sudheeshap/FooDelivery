import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE.cart,
  reducers: {
    addItem(state, action) {
      const cartItem = action.payload.item;
      const existingItem = state.items.find((item) => item.id === cartItem.id);

      if (existingItem) {
        state.items = state.items.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );

        return;
      }

      state.items.push(cartItem);
    },
    removeItem(state, action) {
      const cartItem = action.payload.item;

      if (cartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== cartItem.id);

        return;
      }

      state.items = state.items.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    },
    clearItem(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.item.id,
      );
    },
    clearAllItems(state) {
      state.items = [];
    },
    updateCartRestaurant(state, action) {
      state.restaurant = action.payload.restaurant;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItem,
  clearAllItems,
  updateCartRestaurant,
} = cartSlice.actions;

export default cartSlice.reducer;
