import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Routes.style.js';
import NewsPage from 'src/pages/news/news-page';
import Test from '../components/Test';
import Register from '../components/Register';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/' exact component={Test} />
        <Route path='/news' exact component={NewsPage} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
