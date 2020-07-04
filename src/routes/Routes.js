import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Routes.style.js';
import NewsPage from '../pages/news/news-page';
import NewsDetailPage from '../pages/news/news-detail/index.js';
import Home from '../pages/home/home-page';
import AboutUs from '../pages/about-us';
import AppHeader from '../components/app-header';

const Routes = () => (
  <Router>
    <AppHeader />
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news' exact component={NewsPage} />
        <Route path='/news/:id' exact component={NewsDetailPage} />
        <Route path='/about-us' exact component={AboutUs} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
