import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE.cart,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload.item);
    },
    removeItem(state, action) {
      return state.items.filter((item) => item !== action.payload.item);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
