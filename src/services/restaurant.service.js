import RestaurantModel from '../models/restaurant.model';
import {
  getDataRestaurant,
  getDataRestaurantList,
} from '../api/restaurant-api.service';

/**
 * Hydrate restaurant data
 */
const hydrateModelRestaurant = (data) => {
  const model = new RestaurantModel();
  model.id = data.id;
  model.name = data.name;
  model.logo = data.logo;
  model.slug = data.slug;
  model.cuisines = data.cuisines;
  model.rating = data.rating;
  model.coverPhoto = data.cover_photo;
  model.deliveryIn = data.delivery_in;
  model.distance = data.distance;
  model.isOpen = data.is_open;
  model.isFeatured = data.is_featured;
  model.deliveryFee = data.delivery_fee;
  model.offer = data.offer;

  return { ...model };
};

/**
 * Returns restaurant list based on the search config
 */
export const listRestaurants = (search) => {
  const restaurantList = getDataRestaurantList(search);

  const models = restaurantList.results.map((result) =>
    hydrateModelRestaurant(result),
  );

  return {
    models,
    total: restaurantList.total,
  };
};

/**
 * Returns restaurant by slug
 */
export const loadRestaurant = (slug) =>
  hydrateModelRestaurant(getDataRestaurant(slug));
