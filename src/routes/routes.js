import React, { Suspense, lazy } from 'react';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useSelector } from 'react-redux';
import Toast from '../containers/toast';
import { history } from '../store/store';

import { useStyles } from './routes.style.js';
import ErrorBoundary from '../components/error-boundary';
import ProtectedRoute from '../components/protected-route';
import Home from '../pages/home';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';
import ProductsTable from '../pages/products-table';
import ProductDetails from '../pages/product-details';
import AboutUs from '../pages/about-us';
import Constructor from '../pages/constructor';

const NewsPage = lazy(() => import('../pages/news/news-page'));
const PaymentsAndShipping = lazy(() =>
  import('../pages/payments-and-shipping')
);
const PrivacyPolicy = lazy(() => import('../pages/privacy-policy'));
const Wishlist = lazy(() => import('../pages/wishlist'));
const NewsDetail = lazy(() => import('../pages/news/news-detail'));
const ProductListPage = lazy(() => import('../pages/product-list-page'));
const Register = lazy(() => import('../pages/register'));
const Login = lazy(() => import('../pages/login'));
const Confirmation = lazy(() => import('../pages/confirmation'));
const Recovery = lazy(() => import('../pages/recovery'));
const NewPassword = lazy(() => import('../pages/new-password'));
const ErrorPage = lazy(() => import('../pages/error-page'));
const ThanksPage = lazy(() => import('../pages/thanks-page'));
const Contacts = lazy(() => import('../pages/contacts'));
const Checkout = lazy(() => import('../containers/checkout'));
const ProfilePage = lazy(() => import('../pages/profile-page'));
const OrderHistory = lazy(() => import('../pages/order-history'));
const Materials = lazy(() => import('../pages/materials'));

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
      <Suspense fallback={<div />}>
        <ErrorBoundary>
          <AppHeader />
          <div className={styles.root}>
            <Toast />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/error-page' exact component={ErrorPage} />
              <Route path='/news' exact component={NewsPage} />
              <Route path='/news/:id' exact component={NewsDetail} />
              <Route path='/about-us' exact component={AboutUs} />
              <Route path='/materials' exact component={Materials} />
              <Route
                path='/payment-and-shipping'
                exact
                component={PaymentsAndShipping}
              />
              <Route path='/privacy-policy' exact component={PrivacyPolicy} />
              <Route path='/wishlist' exact component={Wishlist} />
              <Route path='/contacts' exact component={Contacts} />
              <ProtectedRoute
                path='/login'
                exact
                component={Login}
                isAuthed={!userData}
                redirectTo='/'
              />
              <ProtectedRoute
                path='/register'
                exact
                component={Register}
                isAuthed={!userData}
                redirectTo='/'
              />
              <Route path='/thanks' exact component={ThanksPage} />
              <Route path='/checkout' exact component={Checkout} />
              <Route path='/constructor' exact component={Constructor} />
              <Route
                path='/confirmation/:token'
                exact
                render={({ match }) => (
                  <Confirmation token={match.params.token} />
                )}
              />
              <Route path='/recovery' exact component={Recovery} />
              <Route
                path='/recovery/:token'
                exact
                render={({ match }) => (
                  <NewPassword token={match.params.token} />
                )}
              />
              <ProtectedRoute
                component={ProfilePage}
                path='/profile'
                isAuthed={userIsChecked && userData}
                exact
                redirectTo='/login'
              />
              <ProtectedRoute
                component={OrderHistory}
                path='/order-history'
                isAuthed={userIsChecked && userData}
                exact
                redirectTo='/login'
              />
              <Route
                path='/:category'
                exact
                render={({ match }) => {
                  const { category } = match.params;
                  const categoryParam = categories.find(
                    (categoryFound) =>
                      categoryFound.name[1].value.toLowerCase() ===
                      category.toLowerCase()
                  );
                  return <ProductsTable category={categoryParam} />;
                }}
              />
              <Route path='/product/:id' exact component={ProductDetails} />
              <Route
                path='/:category/:model'
                exact
                render={({ match }) => {
                  const { category, model } = match.params;
                  const categoryParam = categories.find(
                    (categoryFound) =>
                      categoryFound.name[1].value.toLowerCase() ===
                      category.toLowerCase()
                  );

                  return (
                    <ProductListPage category={categoryParam} model={model} />
                  );
                }}
              />
            </Switch>
          </div>
          <AppFooter />
        </ErrorBoundary>
      </Suspense>
    </ConnectedRouter>
  );
};

export default Routes;
