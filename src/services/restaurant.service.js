import DATA_RESTAURANTS from '../data/restaurant.data';

/**
 * Apply filters to search
 */
const applyFilters = (filters, restaurants) =>
  restaurants.filter((restaurant) => {
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
  });

/**
 * Returns restaurants based on the search config
 */
export const getRestaurants = function ({
  filters,
  sortById = 'is_featured',
  pageNumber,
  pageSize,
}) {
  return applyFilters(filters, DATA_RESTAURANTS)
    .sort((a, b) => (a[sortById] < b[sortById] ? 1 : -1))
    .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

/**
 * Returns restaurant by slug
 */
export const getRestaurantBySlug = (slug) =>
  DATA_RESTAURANTS.find((restaurant) => restaurant.slug === slug);
