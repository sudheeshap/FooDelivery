import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';
import { fetchMenuGroups } from './menu-group.thunks';

const menuGroupSlice = createSlice({
  name: 'menuGroup',
  initialState: INITIAL_STATE.menuGroup,
  reducers: {
    updateselectedGroupId(state, action) {
      state.selectedGroupId = action.payload.groupId;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMenuGroups.fulfilled, (state, action) => {
      state.collection = action.payload;
      state.selectedGroupId =
        action.payload.length > 0 ? action.payload[0].id : '';
    });
  },
});

export const { updateselectedGroupId } = menuGroupSlice.actions;

export default menuGroupSlice.reducer;
