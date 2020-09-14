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
import Model from './model/model.reducer';
import Currency from './currency/currency.reducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    User,
    News,
    Categories,
    Theme,
    Error,
    Language,
    Wishlist,
    BusinessPages,
    Products,
    Cart,
    Contacts,
    Model,
    Currency
  });

export default rootReducer;
