import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <Router>
      <AppHeader />
      <div className={styles.root}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' exact component={NewsPage} />
          <Route path='/news/:id' exact component={NewsDetailPage} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route
            path='/:category'
            exact
            render={({ match }) => {
              const { category } = match.params;
              return <ProductListPage category={category} />;
            }}
          />
          <Route path='/:category/:id' exact render={() => 'detail page'} />
        </Switch>
      </div>
      <AppFooter />
    </Router>
  );
};

export default Routes;
