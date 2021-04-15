import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import configureStore from './store/store';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { clearLocalStorage } from './services/local-storage.service';
import { clearSessionStorage } from './services/session-storage.service';
import { HORONDI } from './configs';

if (!localStorage.getItem(HORONDI)) {
  clearLocalStorage();
}

if (!sessionStorage.getItem(HORONDI)) {
  clearSessionStorage();
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (window.Cypress) {
  window.store = store;
}
