import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/store';

import { useStyles } from './routes.style.js';
import NewsPage from '../pages/news/news-page';
import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import Wishlist from '../pages/wishlist';
import Checkout from '../pages/checkout';
import NewsDetailPage from '../pages/news/news-detail';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';
import Register from '../pages/register';
import Login from '../pages/login';
import Confirmation from '../pages/confirmation';

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
          <Route path='/wishlist' exact component={Wishlist} />
          <Route path='/checkout' exact component={Checkout} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route
            path='/confirmation/:token'
            exact
            render={({ match }) => <Confirmation token={match.params.token} />}
          />
        </Switch>
      </div>
      <AppFooter />
    </ConnectedRouter>
  );
};

export default Routes;
