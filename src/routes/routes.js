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
import { PATHS } from '../const/paths';

const ImagesConstructor = lazy(() => import('../pages/images-constructor'));
const NewsPage = lazy(() => import('../pages/news/news-page'));
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
const Cart = lazy(() => import('../pages/cart'));
const Checkout = lazy(() => import('../containers/checkout'));
const ProfilePage = lazy(() => import('../pages/profile-page'));
const OrderHistory = lazy(() => import('../pages/order-history'));
const Contacts = lazy(() => import('../pages/contacts'));
const Materials = lazy(() => import('../pages/materials'));
const BusinessPage = lazy(() => import('../pages/business-page'));

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
              <Route path={PATHS.pathToMain} exact component={Home} />
              <Route path={PATHS.pathToErrorPage} exact component={ErrorPage} />
              <Route path={PATHS.pathToNews} exact component={NewsPage} />
              <Route path={PATHS.pathToSingleNews} exact component={NewsDetail} />
              <Route path={PATHS.pathToConstructor} exact component={ImagesConstructor} />
              <Route path={PATHS.pathToWishlist} exact component={Wishlist} />
              <Route path={PATHS.pathToContacts} exact component={Contacts} />
              <Route path={PATHS.pathToMaterials} exact component={Materials} />
              <Route path={PATHS.pathToChosenPage} exact component={BusinessPage} />
              <ProtectedRoute
                path={PATHS.pathToLogin}
                exact
                component={Login}
                isAuthed={!userData}
                redirectTo={PATHS.pathToMain}
              />
              <ProtectedRoute
                path={PATHS.pathToRegister}
                exact
                component={Register}
                isAuthed={!userData}
                redirectTo={PATHS.pathToMain}
              />
              <Route path={PATHS.pathToThanks} component={ThanksPage} />
              <Route path={PATHS.pathToCart} exact component={Cart} />
              <Route path={PATHS.pathToCheckout} exact component={Checkout} />
              <Route
                path={PATHS.pathToConfirmationToken}
                exact
                render={({ match }) => <Confirmation token={match.params.token} />}
              />
              <Route path={PATHS.pathToRecovery} exact component={Recovery} />
              <Route
                path={PATHS.pathToRecoveryToken}
                exact
                render={({ match }) => <NewPassword token={match.params.token} />}
              />
              <ProtectedRoute
                component={ProfilePage}
                path={PATHS.pathToProfile}
                isAuthed={userIsChecked && userData}
                exact
                redirectTo={PATHS.pathToLogin}
              />
              <ProtectedRoute
                component={OrderHistory}
                path={PATHS.pathToOrderHistory}
                isAuthed={userIsChecked && userData}
                exact
                redirectTo={PATHS.pathToLogin}
              />
              <Route
                path={PATHS.pathToCategory}
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
              <Route path={PATHS.pathToChosenProduct} exact component={ProductDetails} />
            </Switch>
          </div>
          <AppFooter />
        </ErrorBoundary>
      </Suspense>
    </ConnectedRouter>
  );
};

export default Routes;
