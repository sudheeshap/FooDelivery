const INITIAL_STATE = {
  restaurant: {
    searchlist: {
      filters: {
        types: [],
        query: '',
      },
      sortBy: 'is_featured',
      currentPage: 1,
      perPage: 15,
      total: 0,
    },
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
