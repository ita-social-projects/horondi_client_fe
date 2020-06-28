import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Routes.style.js';
import NewsPage from 'src/pages/news/news-page';
import NewsDetailPage from 'src/pages/news-detail/index.js';
import AppHeader from '../components/app-header';

const Routes = () => (
  <Router>
    <AppHeader />
    <div>
      <Switch>
        <Route path='/news' exact component={NewsPage} />
        <Route path='/news/:id' exact component={NewsDetailPage} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
