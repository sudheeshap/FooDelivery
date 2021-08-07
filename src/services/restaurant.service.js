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
const sortCallback = (sortBy, resA, resB) => {
  if (sortBy === 'is_featured') {
    return resA[sortBy] < resB[sortBy] ? 1 : -1;
  }
  return resA[sortBy] > resB[sortBy] ? 1 : -1;
};

/**
 * Returns restaurant list based on the search config
 */
export const getRestaurantList = (search) => {
  const restaurants = DATA_RESTAURANTS.filter(
    filterCallback.bind(null, search.filters),
  ).sort(sortCallback.bind(null, search.sortBy));

  const results = restaurants.slice(
    (search.pagination.currentPage - 1) * search.pagination.perPage,
    search.pagination.currentPage * search.pagination.perPage,
  );

  return {
    results,
    total: restaurants.length,
  };
};

/**
 * Returns restaurant by slug
 */
export const getRestaurantBySlug = (slug) =>
  DATA_RESTAURANTS.find((restaurant) => restaurant.slug === slug);
