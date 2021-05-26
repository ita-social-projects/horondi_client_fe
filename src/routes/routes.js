import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useSelector } from 'react-redux';
import { history } from '../store/store';

import { useStyles } from './routes.style.js';
import ErrorBoundary from '../components/error-boundary';
import Loader from '../components/loader';
import ProtectedRoute from '../components/protected-route';
import Home from '../pages/home';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';
import ProductDetails from '../pages/product-details';
import AboutUs from '../pages/about-us';
import Terms from '../pages/terms';
import UserAgreement from '../pages/user-agreement';

const ImagesConstructor = lazy(() => import('../pages/images-constructor'));
const NewsPage = lazy(() => import('../pages/news/news-page'));
const PaymentsAndShipping = lazy(() => import('../pages/payments-and-shipping'));
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
const Cart = lazy(() => import('../pages/cart'));
const Checkout = lazy(() => import('../containers/checkout'));
const ProfilePage = lazy(() => import('../pages/profile-page'));
const OrderHistory = lazy(() => import('../pages/order-history'));
const Materials = lazy(() => import('../pages/materials'));

const Routes = () => {
  const styles = useStyles();

  const { categories, userData, userIsChecked } = useSelector(({ Categories, User }) => ({
    categories: Categories.list,
    userIsChecked: User.userIsChecked,
    userData: User.userData
  }));

  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <AppHeader />
          <div className={styles.root}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/error-page' exact component={ErrorPage} />
              <Route path='/news' exact component={NewsPage} />
              <Route path='/news/:id' exact component={NewsDetail} />
              <Route path='/about-us' exact component={AboutUs} />
              <Route path='/terms' exact component={Terms} />
              <Route path='/user-agreement' exact component={UserAgreement} />
              <Route path='/materials' exact component={Materials} />
              <Route path='/constructor' exact component={ImagesConstructor} />
              <Route path='/payment-and-shipping' exact component={PaymentsAndShipping} />
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
              <Route path='/thanks' component={ThanksPage} />
              <Route path='/cart' exact component={Cart} />
              <Route path='/checkout' exact component={Checkout} />
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
                render={(data) => {
                  const { category, model } = data.match.params;
                  const categoryParam = categories.find(
                    (categoryFound) =>
                      categoryFound.name[1].value.toLowerCase() === category.toLowerCase()
                  );

                  return <ProductListPage category={categoryParam} model={model} />;
                }}
              />
              <Route path='/product/:id' exact component={ProductDetails} />
            </Switch>
          </div>
          <AppFooter />
        </ErrorBoundary>
      </Suspense>
    </ConnectedRouter>
  );
};

export default Routes;
