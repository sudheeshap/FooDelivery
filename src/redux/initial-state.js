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
    selected: null,
    entities: [],
  },
  menuGroup: {
    entities: [],
  },
  cart: {
    restaurant: null,
    items: [],
  },
};

export default INITIAL_STATE;
