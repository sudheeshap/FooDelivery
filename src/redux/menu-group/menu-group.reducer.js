import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';
import { fetchMenuGroups } from './menu-group.thunks';

const menuGroupSlice = createSlice({
  name: 'menuGroup',
  initialState: INITIAL_STATE.menuGroup,
  extraReducers: (builder) => {
    builder.addCase(fetchMenuGroups.fulfilled, (state, action) => {
      state.entities = action.payload;
    });
  },
});

export default menuGroupSlice.reducer;
