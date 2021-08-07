import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';
import { fetchRestaurants } from './restaurant.thunks';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: INITIAL_STATE.restaurant,
  reducers: {
    addFilter(state, action) {
      state.search.filters.push(action.payload.filter);
      state.search.pagination.currentPage = 1;
    },
    removeFilter(state, action) {
      state.search.filters = state.search.filters.filter(
        (filter) => filter !== action.payload.filter,
      );
      state.search.pagination.currentPage = 1;
    },
    applySort(state, action) {
      state.search.sortBy = action.payload.type;
      state.search.pagination.currentPage = 1;
    },
    loadMore(state, action) {
      state.search.pagination.currentPage = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.entities = action.payload.results;
      state.total = action.payload.total;
    });
  },
});

export const { addFilter, removeFilter, applySort, loadMore } =
  restaurantSlice.actions;

export default restaurantSlice.reducer;
