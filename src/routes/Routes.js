import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/store';

import { useStyles } from './Routes.style.js';
import NewsPage from '../pages/news/news-page';
import NewsDetailPage from '../pages/news/news-detail';
import Home from '../pages/home/home-page';
import AboutUs from '../pages/about-us';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';
import ProductListPage from '../pages/product-list-page';

const Routes = () => {
  const styles = useStyles();
  return (
    <ConnectedRouter history={history}>
      <AppHeader />
      <div className={styles.root}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' exact component={NewsPage} />
          <Route path='/news/:id' exact component={NewsDetailPage} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/products' exact component={ProductListPage} />
        </Switch>
      </div>
      <AppFooter />
    </ConnectedRouter>
  );
};

export default Routes;
