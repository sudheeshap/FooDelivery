import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from './cart/cart.reducer';
import productReducer from './product/product.reducer';
import restaurantReducer from './restaurant/restaurant.reducer';

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
