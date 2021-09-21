import { combineReducers } from '@reduxjs/toolkit';

import customerReducer from './customer/customer.reducer';
import cartReducer from './cart/cart.reducer';
import restaurantReducer from './restaurant/restaurant.reducer';
import menuGroupReducer from './menu-group/menu-group.reducer';

const rootReducer = combineReducers({
  customer: customerReducer,
  restaurant: restaurantReducer,
  menuGroup: menuGroupReducer,
  cart: cartReducer,
});

export default rootReducer;
