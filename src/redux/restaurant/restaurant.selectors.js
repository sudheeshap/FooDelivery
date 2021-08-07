import { createSelector } from '@reduxjs/toolkit';

const selectRestaurantState = (state) => state.restaurant;

export const selectRestaurants = createSelector(
  [selectRestaurantState],
  (state) => state.entities || [],
);

export const selectSearch = createSelector(
  [selectRestaurantState],
  (state) => state.search,
);

export const selectSearchFilters = createSelector(
  [selectSearch],
  (search) => search.filters || [],
);

export const selectSearchSortBy = createSelector(
  [selectSearch],
  (search) => search.sortBy,
);

export const selectSearchPagination = createSelector(
  [selectSearch],
  (search) => search.pagination,
);

export const selectTotal = createSelector(
  [selectRestaurantState],
  (state) => state.total,
);

export const selectRestaurantBySlug = (slug) =>
  createSelector([selectRestaurants], (restaurants) =>
    restaurants.filter((restaurant) => restaurant.slug === slug),
  );
