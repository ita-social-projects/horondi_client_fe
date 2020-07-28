import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useSelector } from 'react-redux';
import { history } from '../store/store';

import { useStyles } from './routes.style.js';
import NewsPage from '../pages/news/news-page';
import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import NewsDetailPage from '../pages/news/news-detail';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';
import ProductListPage from '../pages/product-list-page';

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
          <Route path='/news' exact component={NewsPage} />
          <Route path='/news/:id' exact component={NewsDetailPage} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/error-page' exact render={() => 'error page'} />
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
              return <ProductListPage category={categoryParam} />;
            }}
          />
          <Route path='/:category/:id' exact render={() => 'detail page'} />
        </Switch>
      </div>
      <AppFooter />
    </ConnectedRouter>
  );
};

export default Routes;
