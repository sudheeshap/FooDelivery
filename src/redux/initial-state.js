const INITIAL_STATE = {
  customer: {
    id: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
  },
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
    collection: [],
  },
  menuGroup: {
    selectedGroupId: '',
    collection: [],
  },
  cart: {
    restaurant: null,
    items: [],
  },
};

export default INITIAL_STATE;
