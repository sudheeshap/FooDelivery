import { createAsyncThunk } from '@reduxjs/toolkit';

import CartItemModel from '../../models/cart-item.model';
import listMenuGroups from '../../services/menu-group.service';
import {
  addItem,
  clearItems,
  updateCartRestaurant,
} from '../cart/cart.reducer';

/**
 * Fetch menu groups
 */
export const fetchMenuGroups = createAsyncThunk(
  'menuGroup/fetchMenuGroups',
  async () => {
    const menuGroups = await listMenuGroups();
    return menuGroups;
  },
);

/**
 * Add product to the cart
 */
export const addProduct = createAsyncThunk(
  'menuGroup/addProduct',
  async (payload, { dispatch, getState }) => {
    const state = getState();
    const selectedRestaurant = state.restaurant.selected;
    const cartRestaurant = state.cart.restaurant;

    let cartItem = state.cart.items.find(
      (item) => item.id === payload.product.id,
    );

    // Adding from a different restaurant
    if (selectedRestaurant?.id !== cartRestaurant?.id) {
      dispatch(clearItems());
    }

    // Cart is empty OR adding from a different restaurant
    if (
      state.cart.items.length === 0 ||
      selectedRestaurant?.id !== cartRestaurant?.id
    ) {
      dispatch(updateCartRestaurant({ restaurant: selectedRestaurant }));
    }

    if (cartItem) {
      cartItem = { ...cartItem };
    } else {
      cartItem = new CartItemModel().toObject();
      cartItem.id = payload.product.id;
      cartItem.name = payload.product.name;
      cartItem.price = payload.product.price;
    }

    cartItem.quantity += 1;

    dispatch(addItem({ item: cartItem }));
  },
);

export default fetchMenuGroups;
