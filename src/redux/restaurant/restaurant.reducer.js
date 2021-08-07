import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';
import { fetchRestaurants } from './restaurant.thunks';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: INITIAL_STATE.restaurant,
  reducers: {
    addFilter(state, action) {
      state.searchlist.filters.push(action.payload.filter);
      state.searchlist.currentPage = 1;
    },
    removeFilter(state, action) {
      state.searchlist.filters = state.searchlist.filters.filter(
        (filter) => filter !== action.payload.filter,
      );
      state.searchlist.currentPage = 1;
    },
    applySort(state, action) {
      state.searchlist.sortBy = action.payload.type;
      state.searchlist.currentPage = 1;
    },
    loadMore(state, action) {
      state.searchlist.currentPage = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.entities = action.payload.results;
      state.searchlist.total = action.payload.total;
    });
  },
});

export const { addFilter, removeFilter, applySort, loadMore } =
  restaurantSlice.actions;

export default restaurantSlice.reducer;
