import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import BurgerMenu from './burger-menu/burger-menu.reducer';
import { newsReducer as News } from './news/news.reducer';
import User from './user/user.reducer';
import { categoriesReducer as Categories } from './categories/categories.reducer';
import { themeState as Theme } from './theme/theme.reducer';
import { errorReducer as Error } from './error/error.reducer';
import Language from './language/language.reducer';
import { contactsReducer as Contacts } from './contacts/contacts.reducer';
import Products from './products/products.reducer';
import { wishlistReducer as Wishlist } from './wishlist/wishlist.reducer';
import { businessPagesReducer as BusinessPages } from './business-pages/business-pages.reducer';
import { cartReducer as Cart } from './cart/cart.reducer';
import { snackbarReducer as Snackbar } from './snackbar/snackbar.reducer';
import Model from './model/model.reducer';
import Currency from './currency/currency.reducer';
import Comments from './comments/comments.reducer';
import { checkoutReducer as Checkout } from './checkout/checkout.reducer';
import Chat from './chat/chat.reducer';
import { businessPagesReducer as HeaderLinks } from './header-links/header-links.reducer';
import HomePageImages from './home-page-looks/home-page-looks.reducer';
import Pattern from './pattern/pattern.reducer';
import HomePageSlider from './homepage-slider/homepage-slider.reducer';
import SearchBar from './search-bar/search-bar.reducer';

export const rootReducer = (history) =>
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
    BurgerMenu,
    HeaderLinks,
    HomePageImages,
    HomePageSlider,
    SearchBar,
    Pattern
  });
