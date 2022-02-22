export const userMocks = {
  id: 1,
  name: 'user',
  ordersCount: 3,
  curPage: 1
};

export const email = 'mock@gmail.com';
export const pass = 'testpass';
export const token = '1111bGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
export const userId = '1111bGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
export const rememberMe = true;
export const language = 0;
export const upload = null;
export const countOrder = { countOrder: 0 };
export const error = {
  message: 'error'
};

export const payload = {
  user: {
    email,
    pass,
    rememberMe
  }
};

export const user = {
  orders: [],
  token: 'nGFnawgnWA321NJFKW',
  refreshToken: 'nGFnawgnWA321NJFKW',
  _id: '60a61ee13a445e1d1c22f600',
  email: 'test@gmail.com',
  firstName: 'testFirstName',
  lastName: 'testLastName',
  phoneNumber: null,
  confirmed: true,
  images: null,
  address: null,
  banned: {
    blockPeriod: '0',
    blockCount: 0,
    updatedAt: '2020-01-01T08:25:45.304Z'
  },
  cart: null
};

export const purchasedProducts = [];

export const wishlist = [];

export const userWithProducts = {
  ...user,
  purchasedProducts,
  wishlist
};

export const pagination = {
  limit: 10,
  skip: 0
};

export const initialStateMock = {
  userData: null,
  userOrders: null,
  error: null,
  userLoading: false,
  userRecovered: false,
  userRegistered: false,
  userIsChecked: false,
  passwordReset: false,
  confirmationEmailSent: false,
  recoveryLoading: false,
  confirmationLoading: false
};
