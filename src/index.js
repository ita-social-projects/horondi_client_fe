import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './index.css';

import store from './store/store';

ReactDOM.render(<App />, document.getElementById('root'));
if (window.Cypress) {
  window.store = store;
}
