const INITIAL_STATE = {
  restaurant: {
    search: {
      filters: [],
      sortBy: 'is_featured',
      pagination: {
        currentPage: 1,
        perPage: 15,
      },
    },
    total: 0,
    entities: [],
  },
  product: {
    entities: [],
  },
  cart: {
    restaurantId: '',
    subTotal: 0,
    grandTotal: 0,
    items: [],
  },
};

export default INITIAL_STATE;
