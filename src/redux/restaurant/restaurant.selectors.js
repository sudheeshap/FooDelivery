import { createSelector } from '@reduxjs/toolkit';

const selectRestaurantState = (state) => state.restaurant;

export const selectRestaurants = createSelector([selectRestaurantState], (state) => state.entities);

export default selectRestaurants;
