import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Routes.style.js';
import NewsPage from 'src/pages/news/news-page';
import NewsDetailPage from 'src/pages/news-detail/index.js';
import Home from 'src/pages/home/home-page';
import AboutUs from 'src/pages/about-us';
import Register from '../pages/Register';
import Login from '../pages/Login';
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
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
