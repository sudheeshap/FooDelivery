const INITIAL_STATE = {
  restaurant: {
    filters: [],
    sortById: '',
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
