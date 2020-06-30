import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsPage from 'src/pages/news/news-page';
import Home from 'src/pages/home/home-page';
import AboutUs from 'src/pages/about-us';
import { useStyles } from './Routes.style.js';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';

const Routes = () => {
  const styles = useStyles();
  return (
    <Router>
      <AppHeader />
      <div className={styles.root}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' exact component={NewsPage} />
          <Route path='/about-us' exact component={AboutUs} />
        </Switch>
      </div>
      <AppFooter />
    </Router>
  );
};

export default Routes;
