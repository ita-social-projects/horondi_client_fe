import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsPage from 'src/pages/news/news-page';
import HomePage from 'src/pages/home/home-page';
import { useStyles } from './routes.style.js';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';

const Routes = () => {
  const styles = useStyles();

  return (
    <Router>
      <AppHeader />
      <div className={styles.root}>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/news' exact component={NewsPage} />
        </Switch>
      </div>
      <AppFooter />
    </Router>
  );
};

export default Routes;
