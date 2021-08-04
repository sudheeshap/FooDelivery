import { createSelector } from '@reduxjs/toolkit';

const selectRestaurantState = (state) => state.restaurant;

export const selectRestaurants = createSelector(
  [selectRestaurantState],
  (state) => state.entities || [],
);

// prettier-ignore
export const selectRestaurant = (id) => createSelector(
  [selectRestaurants],
  (restaurants) => restaurants.filter((rs) => rs.id === id),
);

export const selectFilters = createSelector(
  [selectRestaurantState],
  (state) => state.filters || [],
);

export const selectSortBy = createSelector(
  [selectRestaurantState],
  (state) => state.sortBy,
);
