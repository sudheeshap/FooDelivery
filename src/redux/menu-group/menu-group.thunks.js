import { createAsyncThunk } from '@reduxjs/toolkit';

import listMenuGroups from '../../services/menu-group.service';

export const fetchMenuGroups = createAsyncThunk(
  'menuGroup/fetchMenuGroups',
  async () => {
    const menuGroups = await listMenuGroups();
    return menuGroups;
  },
);

export default fetchMenuGroups;
