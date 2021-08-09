import { createSlice } from '@reduxjs/toolkit';
import CartItemModel from '../../models/cart-item.model';
import ProductModel from '../../models/product.model';

import INITIAL_STATE from '../initial-state';

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE.cart,
  reducers: {
    addItem(state, action) {
      let cartItem = state.items.find(
        (item) => item.id === action.payload.item.id,
      );

      if (!cartItem) {
        cartItem = new CartItemModel();
        cartItem.product = { ...new ProductModel() };
      }

      cartItem.quantity += 1;

      state.items.push({ ...cartItem });
    },
    removeItem(state, action) {
      return state.items.filter((item) => item !== action.payload.item);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
