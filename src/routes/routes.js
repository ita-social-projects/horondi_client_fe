import React, { useContext, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useSelector } from 'react-redux';

import { history } from '../store/store';
import { useStyles } from './routes.style.js';
import ErrorBoundary from '../components/error-boundary';
import Loader from '../components/loader';
import ProtectedRoute from '../components/protected-route';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';
import Home from '../pages/home';
import ProductDetails from '../pages/product-details';
import routes from '../configs/routes';
import { CategoriesContext } from '../context/categories/categories-context';

const {
  pathToMain,
  pathToLogin,
  pathToThanks,
  pathToRegister,
  pathToErrorPage,
  pathToNotFoundPage,
  pathToNews,
  pathToSingleNews,
  pathToConstructor,
  pathToCart,
  pathToCheckout,
  pathToWishlist,
  pathToContacts,
  pathToMaterials,
  pathToChosenPage,
  pathToConfirmationToken,
  pathToRecovery,
  pathToCertificateThanks,
  pathToRecoveryToken,
  pathToProfile,
  pathToOrderHistory,
  pathToCategory,
  pathToChosenProduct,
  pathToAnswersQuestionsPage,
  pathToGiftСertificate,
  pathToMyCertificates,
  pathToAboutUs
} = routes;

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
const NotFoundPage = lazy(() => import('../pages/not-found-page'));
const ThanksPage = lazy(() => import('../pages/thanks-page'));
const CertificateThanksPage = lazy(() => import('../pages/certificate-thanks-page'));
const Cart = lazy(() => import('../pages/cart'));
const Checkout = lazy(() => import('../containers/checkout'));
const ProfilePage = lazy(() => import('../pages/profile-page'));
const OrderHistory = lazy(() => import('../pages/order-history'));
const Contacts = lazy(() => import('../pages/contacts'));
const Materials = lazy(() => import('../pages/materials'));
const BusinessPage = lazy(() => import('../pages/business-page'));
const AnswersQuestionsPage = lazy(() => import('../pages/answers-questions-page'));
const GiftСertificate = lazy(() => import('../pages/gift-certificate'));
const MyCertificates = lazy(() => import('../pages/my-certificates'));
const AboutUsPage = lazy(() => import('../pages/about-us'));

const Routes = () => {
  const styles = useStyles();
  const { categories } = useContext(CategoriesContext);
  const { userData, userIsChecked } = useSelector(({ User }) => ({
    userIsChecked: User.userIsChecked,
    userData: User.userData
  }));

  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <AppHeader />
          <div className={`${styles.root} mui-fixed`}>
            <Switch>
              <Route path={pathToMain} exact component={Home} />
              <Route path={pathToErrorPage} exact component={ErrorPage} />
              <Route path={pathToNotFoundPage} exact component={NotFoundPage} />
              <Route path={pathToNews} exact component={NewsPage} />
              <Route path={pathToSingleNews} exact component={NewsDetail} />
              <Route path={pathToConstructor} exact component={ImagesConstructor} />
              <Route path={pathToWishlist} exact component={Wishlist} />
              <Route path={pathToContacts} exact component={Contacts} />
              <Route path={pathToMaterials} exact component={Materials} />
              <Route path={pathToChosenPage} exact component={BusinessPage} />
              <Route path={pathToAnswersQuestionsPage} exact component={AnswersQuestionsPage} />
              <Route path={pathToGiftСertificate} exact component={GiftСertificate} />
              <Route path={pathToAboutUs} exact component={AboutUsPage} />

              <ProtectedRoute
                path={pathToLogin}
                exact
                component={Login}
                isAuthed={!userData}
                redirectTo={pathToMain}
              />
              <ProtectedRoute
                path={pathToRegister}
                exact
                component={Register}
                isAuthed={!userData}
                redirectTo={pathToMain}
              />
              <Route path={pathToThanks} exact component={ThanksPage} />
              <Route path={pathToCertificateThanks} component={CertificateThanksPage} />
              <Route path={pathToCart} exact component={Cart} />
              <Route path={pathToCheckout} exact component={Checkout} />
              <Route
                path={pathToConfirmationToken}
                exact
                render={({ match }) => <Confirmation token={match.params.token} />}
              />
              <Route path={pathToRecovery} exact component={Recovery} />
              <Route
                path={pathToRecoveryToken}
                exact
                render={({ match }) => <NewPassword token={match.params.token} />}
              />
              <ProtectedRoute
                component={ProfilePage}
                path={pathToProfile}
                isAuthed={userIsChecked && userData}
                exact
                redirectTo={pathToLogin}
              />
              <ProtectedRoute
                component={OrderHistory}
                path={pathToOrderHistory}
                isAuthed={userIsChecked && userData}
                exact
                redirectTo={pathToLogin}
              />
              <ProtectedRoute
                component={MyCertificates}
                path={pathToMyCertificates}
                isAuthed={userIsChecked && userData}
                exact
                redirectTo={pathToLogin}
              />
              <Route
                path={pathToCategory}
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
              <Route path={pathToChosenProduct} exact component={ProductDetails} />
              <Redirect to={pathToNotFoundPage} />
            </Switch>
          </div>
          <AppFooter />
        </ErrorBoundary>
      </Suspense>
    </ConnectedRouter>
  );
};

export default Routes;
