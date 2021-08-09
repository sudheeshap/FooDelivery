import { createSelector } from '@reduxjs/toolkit';

/**
 * Select menu group state
 */
const selectMenuGroupState = (state) => state.menuGroup;

/**
 * Select menu groups for restaurant
 */
export const selectMenuGroups = createSelector(
  [selectMenuGroupState],
  (state) => state.entities, // Mock data: It should be menu groups for selected restaurant)
);

/**
 * Select menu group for ID
 */
export const selectMenuGroup = (id) =>
  createSelector(
    [selectMenuGroups],
    (menuGroups) => menuGroups.find((e) => e.id === id) || {},
  );

/**
 * Select products for menu group
 */
export const selectMenuGroupProducts = (id) =>
  createSelector(
    [selectMenuGroup(id)],
    (menuGroup) => menuGroup.products || [],
  );
