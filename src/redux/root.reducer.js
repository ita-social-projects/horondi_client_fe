import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import News from './news/news.reducer';
import User from './user/user.reducer';
import Categories from './categories/categories.reducer';
import Theme from './theme/theme.reducer';
import Error from './error/error.reducer';
import Language from './language/language.reducer';
import Contacts from './contacts/contacts.reducer';
import Products from './products/products.reducer';
import Wishlist from './wishlist/wishlist.reducer';
import BusinessPages from './business-pages/business-pages.reducer';
import Cart from './cart/cart.reducer';
import Snackbar from './snackbar/snackbar.reducer';
import Model from './model/model.reducer';
import Currency from './currency/currency.reducer';
import Comments from './comments/comments.reducer';
import Checkout from './checkout/checkout.reducer';
import Chat from './chat/chat.reducer';
import HeaderLinks from './header-links/header-links.reducer';
import HomePageImages from './home-page-looks/home-page-looks.reducer';
import Pattern from './pattern/pattern.reducer';
import HomePageSlider from './homepage-slider/homepage-slider.reducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    User,
    News,
    Categories,
    Theme,
    Error,
    Language,
    Products,
    Wishlist,
    Cart,
    Snackbar,
    Contacts,
    Model,
    Currency,
    Comments,
    Checkout,
    BusinessPages,
    Chat,
    HeaderLinks,
    HomePageImages,
    Pattern,
    HomePageSlider
  });

export default rootReducer;
