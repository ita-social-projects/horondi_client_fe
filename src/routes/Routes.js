import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Routes.style.js';
import NewsPage from 'src/pages/news/news-page';
import Home from 'src/pages/home/home-page';
import AppHeader from '../components/app-header';
import AppFooter from '../components/App-footer';

const Routes = () => (
  <Router>
    <AppHeader />
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news' exact component={NewsPage} />
      </Switch>
    </div>
    <AppFooter />
  </Router>
);

export default Routes;
