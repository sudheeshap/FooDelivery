// import RestaurantModel from '../models/restaurant.model';
// import {
//   getDataRestaurant,
//   getDataRestaurantList,
// } from '../api/restaurant-api.service';
// import CartItemModel from '../models/cart-item.model';

// /**
//  * Hydrate cart item data
//  */
// const hydrateModelCartItem = (data) => {
//   const model = new CartItemModel();
//   model.id = data.id;
//   model.name = data.name;
//   model.quantity = data.quantity;

//   return { ...model };
// };

/**
 * Returns restaurant list based on the search config
 */
// export const listRestaurants = (search) => {
//   const restaurantList = getDataRestaurantList(search);

//   const models = restaurantList.results.map((result) =>
//     hydrateModelRestaurant(result),
//   );

//   return {
//     models,
//     total: restaurantList.total,
//   };
// };

// /**
//  * Returns restaurant by slug
//  */
// export const loadRestaurant = (slug) =>
//   hydrateModelRestaurant(getDataRestaurant(slug));
