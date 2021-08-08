import DATA_RESTAURANTS from '../data/restaurant.data';

/**
 * Callback to filter restaurants
 */
const filterCallback = (filters, restaurant) => {
  let isValid = true;

  // Filter by search query
  if (filters.query) {
    isValid = restaurant.name
      .toLowerCase()
      .includes(filters.query.trim().toLowerCase());
  }

  // Filter by type: offer
  if (filters.types.includes('offer')) {
    isValid = isValid && !!restaurant.offer;
  }

  // Filter by type: fast delivery
  if (filters.types.includes('fast_delivery')) {
    isValid = isValid && Number(restaurant.delivery_in.split(' ')[2]) <= 30;
  }

  // Filter by type: free delivery
  if (filters.types.includes('free_delivery')) {
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
 * Returns restaurant list based on the searchlist config
 */
export const getRestaurantList = (search) => {
  const restaurants = DATA_RESTAURANTS.filter(
    filterCallback.bind(null, search.filters),
  ).sort(sortCallback.bind(null, search.sortBy));

  const results = restaurants.slice(
    (search.currentPage - 1) * search.perPage,
    search.currentPage * search.perPage,
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
