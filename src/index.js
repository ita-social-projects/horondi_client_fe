import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import {
  cartService,
  catalogService,
  orderService,
  productService,
  userService,
  ratingService
} from './services';
import { StoreServiceProvider } from './components/store-service-context';

import './index.css';

import store from './store/store';

const clientService = {
  cartService,
  catalogService,
  orderService,
  productService,
  userService,
  ratingService
};

ReactDOM.render(
  <Provider store={store}>
    <StoreServiceProvider value={clientService}>
      <App />
    </StoreServiceProvider>
  </Provider>,
  document.getElementById('root')
);
if (window.Cypress) {
  window.store = store;
}
