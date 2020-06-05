const initialState = {
  orderStore: {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    street: '',
    buildingNumber: '',
    contactPhone: '',
    deliveryType: '',
    paymentMethod: ''
  }
};

const checkoutReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORDER':
      return {
        ...state,
        orderStore: action.payload
      };

    case 'CLEAR_ORDER':
      return {
        ...state,
        orderStore: {}
      };

    default:
      return state;
  }
};

export default checkoutReduser;
