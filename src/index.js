import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import configureStore from './store/store';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { clearLocalStorage } from './services/local-storage.service';

if (!localStorage.getItem('horondi')) {
  clearLocalStorage();
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
