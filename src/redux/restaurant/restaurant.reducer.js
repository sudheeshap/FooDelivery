import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';
import { fetchRestaurant, fetchRestaurants } from './restaurant.thunks';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: INITIAL_STATE.restaurant,
  reducers: {
    updateFilterQuery(state, action) {
      state.searchlist.filters.query = action.payload.query;
    },
    updateFilterTypes(state, action) {
      state.searchlist.filters.types = action.payload.types;
      state.searchlist.currentPage = 1;
    },
    updateSort(state, action) {
      state.searchlist.sortBy = action.payload.type;
      state.searchlist.currentPage = 1;
    },
    loadMore(state, action) {
      state.searchlist.currentPage = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.collection = action.payload.models;
      state.searchlist.total = action.payload.total;
    });
    builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
      state.selected = action.payload;
    });
  },
});

export const { updateFilterTypes, updateFilterQuery, updateSort, loadMore } =
  restaurantSlice.actions;

export default restaurantSlice.reducer;
