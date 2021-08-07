import { createSelector } from '@reduxjs/toolkit';

const selectRestaurantState = (state) => state.restaurant;

export const selectRestaurants = createSelector(
  [selectRestaurantState],
  (state) => state.entities || [],
);

export const selectSearchlist = createSelector(
  [selectRestaurantState],
  (state) => state.searchlist,
);

export const selectRestaurantBySlug = (slug) =>
  createSelector([selectRestaurants], (restaurants) =>
    restaurants.filter((restaurant) => restaurant.slug === slug),
  );
