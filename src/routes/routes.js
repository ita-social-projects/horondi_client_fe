import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsPage from 'src/pages/news/news-page';
import HomePage from 'src/pages/home/home-page';
import AboutUs from 'src/pages/about-us/index.js';
import NewsDetailPage from 'src/pages/news-detail/index.js';
import { useStyles } from './routes.style.js';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';
import Register from '../pages/register';
import Login from '../pages/login';

const Routes = () => {
  const styles = useStyles();

  return (
    <Router>
      <AppHeader />
      <div className={styles.root}>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/news' exact component={NewsPage} />
          <Route path='/news/:id' exact component={NewsDetailPage} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </div>
      <AppFooter />
    </Router>
  );
};

export default Routes;
