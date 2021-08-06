import { createSelector } from '@reduxjs/toolkit';

const selectRestaurantState = (state) => state.restaurant;

export const selectRestaurants = createSelector(
  [selectRestaurantState],
  (state) => state.entities || [],
);

export const selectFilters = createSelector(
  [selectRestaurantState],
  (state) => state.filters || [],
);

// export const selectRestaurantBySlug = (slug) =>
//   createSelector([selectRestaurants], (restaurants) =>
//     restaurants.filter((restaurant) => restaurant.slug === slug),
//   );

export const selectSortById = createSelector(
  [selectRestaurantState],
  (state) => state.sortById || 'is_featured',
);
