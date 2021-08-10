import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE.cart,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload.item;
      const cartItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id,
      );

      if (cartItemIndex >= 0) {
        state.items[cartItemIndex] = action.payload.item;

        return;
      }

      state.items.push(newItem);
    },
    removeItem(state, action) {
      return state.items.filter((item) => item !== action.payload.item);
    },
    clearItems(state) {
      state.items = [];
    },
    updateCartRestaurant(state, action) {
      state.restaurant = action.payload.restaurant;
    },
  },
});

export const { addItem, removeItem, clearItems, updateCartRestaurant } =
  cartSlice.actions;

export default cartSlice.reducer;
