import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useSelector } from 'react-redux';
import { history } from '../store/store';

import { useStyles } from './routes.style.js';
import NewsPage from '../pages/news/news-page';
import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import Cart from '../pages/cart';
import Wishlist from '../pages/wishlist';
import NewsDetailPage from '../pages/news/news-detail';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';
import ProductListPage from '../pages/product-list-page';
import Register from '../pages/register';
import Login from '../pages/login';
import Confirmation from '../pages/confirmation';
import Recovery from '../pages/recovery';
import NewPassword from '../pages/new-password';
import ErrorPage from '../pages/error-page';
import ThanksPage from '../pages/thanks-page';
import ProductsCarousel from '../pages/products-carousel';

const Routes = () => {
  const styles = useStyles();

  const { categories } = useSelector(({ Categories }) => ({
    categories: Categories.list
  }));

  return (
    <ConnectedRouter history={history}>
      <AppHeader />
      <div className={styles.root}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/error-page' exact component={ErrorPage} />
          <Route path='/news' exact component={NewsPage} />
          <Route path='/news/:id' exact component={NewsDetailPage} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/wishlist' exact component={Wishlist} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/thanks' exact component={ThanksPage} />
          <Route
            path='/confirmation/:token'
            exact
            render={({ match }) => <Confirmation token={match.params.token} />}
          />
          <Route path='/recovery' exact component={Recovery} />
          <Route
            path='/recovery/:token'
            exact
            render={({ match }) => <NewPassword token={match.params.token} />}
          />
          <Route
            path='/:category'
            exact
            render={({ match }) => {
              const { category } = match.params;
              const categoryParam = categories.find(
                (categoryFound) =>
                  categoryFound.name[1].value.toLowerCase() ===
                    category.toLowerCase() && categoryFound.isMain
              );
              return <ProductsCarousel category={categoryParam} />;
            }}
          />
          <Route
            path='/:category/:model'
            exact
            render={({ match }) => {
              const { category, model } = match.params;
              const categoryParam = categories.find(
                (categoryFound) =>
                  categoryFound.name[1].value.toLowerCase() ===
                    category.toLowerCase() && categoryFound.isMain
              );
              return <ProductListPage category={categoryParam} model={model} />;
            }}
          />
          <Route path='/product/:id' exact render={() => 'detail page'} />
        </Switch>
      </div>
      <AppFooter />
    </ConnectedRouter>
  );
};

export default Routes;
