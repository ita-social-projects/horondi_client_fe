import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Routes.style.js';
import NewsPage from 'src/pages/news/news-page';
import Home from 'src/pages/home/home-page';
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
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
