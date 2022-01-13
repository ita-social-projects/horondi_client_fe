import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/client';

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
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

if (window.Cypress) {
  window.store = store;
}
