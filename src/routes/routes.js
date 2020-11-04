import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useSelector } from 'react-redux';
import { history } from '../store/store';

import { useStyles } from './routes.style.js';
import NewsPage from '../pages/news/news-page';
import Home from '../pages/home';
import ProductDetails from '../pages/product-details';
import AboutUs from '../pages/about-us';
import PaymentsAndShipping from '../pages/payments-and-shipping';
import PrivacyPolicy from '../pages/privacy-policy';
import Cart from '../pages/cart';
import Wishlist from '../pages/wishlist';
import NewsDetail from '../pages/news/news-detail';
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
import Contacts from '../pages/contacts';
import ProductsCarousel from '../pages/products-carousel';
import Checkout from '../containers/checkout';
import ProfilePage from '../pages/profile-page';
import OrderHistory from '../pages/order-history';
import ProtectedRoute from '../components/protected-route';
import Materials from '../pages/materials';
import ErrorBoundary from '../components/error-boundary/';

const Routes = () => {
  const styles = useStyles();

  const { categories, userData, userIsChecked } = useSelector(
    ({ Categories, User }) => ({
      categories: Categories.list,
      userIsChecked: User.userIsChecked,
      userData: User.userData
    })
  );

  return (
    <ConnectedRouter history={history}>
      <AppHeader />
      <div className={styles.root}>
        <Switch>
          <Route
            path='/'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/error-page'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <ErrorPage />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/news'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <NewsPage />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/news/:id'
            exact
            render={({ match }) => (
              <ErrorBoundary>
                <NewsDetail match={match} />
              </ErrorBoundary>
            )}
          />
          <Route
            path='/about-us'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <AboutUs />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/materials'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <Materials />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/payment-and-shipping'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <PaymentsAndShipping />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/privacy-policy'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <PrivacyPolicy />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/cart'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <Cart />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/wishlist'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <Wishlist />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/contacts'
            exact
            render={({ fromCheckout }) => {
              return (
                <ErrorBoundary>
                  <Contacts fromCheckout={fromCheckout} />
                </ErrorBoundary>
              );
            }}
          />
          <ProtectedRoute
            path='/login'
            exact
            isAuthed={!userData}
            redirectTo='/'
            component={Login}
          />
          <ProtectedRoute
            path='/register'
            exact
            isAuthed={!userData}
            redirectTo='/'
            component={Register}
          />
          <Route
            path='/thanks'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <ThanksPage />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/checkout'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <Checkout />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/confirmation/:token'
            exact
            render={({ match }) => (
              <ErrorBoundary>
                <Confirmation token={match.params.token} />
              </ErrorBoundary>
            )}
          />
          <Route
            path='/recovery'
            exact
            render={() => {
              return (
                <ErrorBoundary>
                  <Recovery />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/recovery/:token'
            exact
            render={({ match }) => (
              <ErrorBoundary>
                <NewPassword token={match.params.token} />
              </ErrorBoundary>
            )}
          />
          <ProtectedRoute
            path='/profile'
            isAuthed={userIsChecked && userData}
            exact
            redirectTo='/login'
            component={ProfilePage}
          />
          <ProtectedRoute
            path='/order-history'
            isAuthed={userIsChecked && userData}
            exact
            redirectTo='/login'
            component={OrderHistory}
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
              return (
                <ErrorBoundary>
                  <ProductsCarousel category={categoryParam} />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            path='/product/:id'
            exact
            render={({ match }) => {
              return (
                <ErrorBoundary>
                  <ProductDetails match={match} />
                </ErrorBoundary>
              );
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
              return (
                <ErrorBoundary>
                  <ProductListPage category={categoryParam} model={model} />
                </ErrorBoundary>
              );
            }}
          />
        </Switch>
      </div>
      <AppFooter />
    </ConnectedRouter>
  );
};

export default Routes;
