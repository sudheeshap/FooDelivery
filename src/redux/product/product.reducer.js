import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from '../initial-state';

const productSlice = createSlice({
  name: 'product',
  initialState: INITIAL_STATE.product,
});

export default productSlice.reducer;
