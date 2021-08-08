import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE.cart,
  reducers: {
    addItem(state, action) {
      const cartItem = state.items.find(
        (item) => item.id === action.payload.item.id,
      );

      // Add quantity as the item has already added to the cart
      if (cartItem) {
        cartItem.quantity += 1;

        return;
      }

      state.items.push(cartItem);
    },
    removeItem(state, action) {
      return state.items.filter((item) => item !== action.payload.item);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
