import { createAsyncThunk } from '@reduxjs/toolkit';

import listMenuGroups from '../../services/menu-group.service';

export const fetchMenuGroups = createAsyncThunk(
  'product/fetchMenuGroups',
  async () => {
    const products = await listMenuGroups();
    return products;
  },
);

export default fetchMenuGroups;
