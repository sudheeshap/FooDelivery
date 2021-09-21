import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';

const customerSlice = createSlice({
  name: 'customer',
  initialState: INITIAL_STATE.customer,
  reducers: {
    updateCustomer(state, action) {
      return action.payload.customer;
    },
  },
});

export const { updateCustomer } = customerSlice.actions;

export default customerSlice.reducer;
