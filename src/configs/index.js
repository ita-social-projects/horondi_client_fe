export const itemsPerPage = [15, 30, 60];
export const PRODUCT_LIST_URL = '/productlist/';
export const CATALOGS_URL = '/catalogs/';
export const placeholder = 'Type here...';
export const countries = {
  title: 'Country',
  name: 'country',
  value: [
    '',
    'Ukraine',
    'Italy',
    'Netherlands',
    'Poland',
    'Portugal',
    'France',
    'Germany',
    'Greece',
    'Spain',
    'Hungary',
    'Sweden',
    'England',
    'USA'
  ]
};
export const paymentMethods = {
  title: 'Payment Method',
  name: 'paymentMethod',
  value: [
    '',
    'credit card',
    'pay pal',
    'cash',
    'google pay',
    'amazon pay',
    'apple pay'
  ]
};

export const deliveryType = {
  title: 'Delivery Type',
  name: 'deliveryType',
  value: ['', 'currier', 'post', 'delivery servise']
};

export const socialNetworkLinks = {
  title: 'Links',
  telegram: 'https://web.telegram.org',
  facebook: 'https://www.facebook.com/Fn-100171608356044/',
  instagram: 'https://www.instagram.com/'
};

export const policiesFooter = {
  title: 'Information',
  items: [
    { id: 1, url: '/about-us', item: 'About us' },
    { id: 2, url: '/terms-conditions', item: 'Terms and Conditions' },
    { id: 3, url: '#', item: 'Privacy Policy' },
    { id: 4, url: '/materials', item: 'Materials' }
  ]
};

export const contactInformationFooter = {
  title: 'Contacts',
  items: ['FashionNode', 'fashionnode@gmail.com', '+380630123456']
};

export const catalogsFooter = {
  title: 'Catalogs',
  items: [
    { id: 1, url: 'men', item: 'Men' },
    { id: 2, url: 'women', item: 'Women' },
    { id: 3, url: 'kids', item: 'Kids' }
  ]
};

export const formRegExp = {
  email:
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
  name: "^(?=.{1,30}$)[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  password: '.{8,30}'
};

export const routes = {
  pathToOrders: '/',
  pathToProducts: '/products',
  pathToProductDetails: '/product/:id',
  pathToCategories: '/categories',
  pathToCategoryDetails: '/category/:id',
  pathToBrands: '/brands',
  pathToNews: '/news',
  pathToNewsDetails: '/news/:id',
  pathToBrandDetails: '/brand/:id',
  pathToUserDetails: '/user/:id',
  pathToLogin: '/login',
  pathToOrderDetails: '/order/:id'
};

export const config = {
  app: {
    serverUrl: 'http://localhost:5000/'
  }
};
