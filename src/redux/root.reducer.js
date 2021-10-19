import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { newsReducer as News } from './news/news.reducer';
import User from './user/user.reducer';
import { themeState as Theme } from './theme/theme.reducer';
import { errorReducer as Error } from './error/error.reducer';
import Language from './language/language.reducer';
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
import Pattern from './pattern/pattern.reducer';
import SearchBar from './search-bar/search-bar.reducer';
import Constructor from './images-constructor/constructor.reducer';
import { toastReducer as Toast } from './toast/toast.reducer';
import { orderReducer as Order } from './order/order.reducer';
import { contactsReducer as Contacts } from './contacts/contacts.reducer';

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    User,
    News,
    Theme,
    Error,
    Language,
    Toast,
    Products,
    Wishlist,
    Cart,
    Contacts,
    Snackbar,
    Model,
    Currency,
    Comments,
    Checkout,
    BusinessPages,
    Chat,
    HeaderLinks,
    SearchBar,
    Pattern,
    Constructor,
    Order
  });
