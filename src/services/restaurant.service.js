import DATA_RESTAURANTS from '../data/restaurant.data';

/**
 * Callback to filter restaurants
 */
const filterCallback = (filters, restaurant) => {
  let isValid = true;
  if (filters.includes('offer')) {
    isValid = !!restaurant.offer;
  }

  if (filters.includes('fast_delivery')) {
    isValid = isValid && Number(restaurant.delivery_in.split(' ')[2]) <= 30;
  }

  if (filters.includes('free_delivery')) {
    isValid = isValid && !restaurant.delivery_charge;
  }

  return isValid;
};

/**
 * Callback to sort restaurants
 */
const sortCallback = (sortById, resA, resB) => {
  if (sortById === 'is_featured') {
    return resA[sortById] < resB[sortById] ? 1 : -1;
  }
  return resA[sortById] > resB[sortById] ? 1 : -1;
};

/**
 * Returns restaurants based on the search config
 */
export const getRestaurants = function ({
  filters,
  sortById,
  pageNumber,
  pageSize,
}) {
  console.log(sortById, pageNumber, pageSize);
  return DATA_RESTAURANTS.filter(filterCallback.bind(null, filters))
    .sort(sortCallback.bind(null, sortById))
    .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

/**
 * Returns restaurant by slug
 */
export const getRestaurantBySlug = (slug) =>
  DATA_RESTAURANTS.find((restaurant) => restaurant.slug === slug);
