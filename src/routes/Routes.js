import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Routes.style.js';
import NewsPage from 'src/pages/news/news-page';
import Test from '../components/Test';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/' exact component={Test} />
        <Route path='/news' exact component={NewsPage} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
