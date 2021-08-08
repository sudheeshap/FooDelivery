import { createSelector } from '@reduxjs/toolkit';

const selectRestaurantState = (state) => state.restaurant;

export const selectRestaurants = createSelector(
  [selectRestaurantState],
  (state) => state.entities || [],
);

/**
 * Select searchlist
 */
export const selectSearchlist = createSelector(
  [selectRestaurantState],
  (state) => state.searchlist,
);

/**
 * Select searchlist sort
 */
export const selectSearchlistSortBy = createSelector(
  [selectSearchlist],
  (searchlist) => searchlist.sortBy,
);

/**
 * Select searchlist total
 */
export const selectSearchlistTotal = createSelector(
  [selectSearchlist],
  (searchlist) => searchlist.total,
);

/**
 * Select searchlist per page
 */
export const selectSearchlistPerPage = createSelector(
  [selectSearchlist],
  (searchlist) => searchlist.perPage,
);

/**
 * Select searchlist current page
 */
export const selectSearchlistCurrentPage = createSelector(
  [selectSearchlist],
  (searchlist) => searchlist.currentPage,
);

/**
 * Select searchlist filters
 */
export const selectSearchlistFilters = createSelector(
  [selectSearchlist],
  (searchlist) => searchlist.filters,
);

/**
 * Select type filters
 */
export const selectSearchlistFilterTypes = createSelector(
  [selectSearchlistFilters],
  (filters) => filters.types,
);

/**
 * Select search query
 */
export const selectSearchlistFilterQuery = createSelector(
  [selectSearchlistFilters],
  (filters) => filters.query,
);

export const selectRestaurantBySlug = (slug) =>
  createSelector([selectRestaurants], (restaurants) =>
    restaurants.filter((restaurant) => restaurant.slug === slug),
  );
