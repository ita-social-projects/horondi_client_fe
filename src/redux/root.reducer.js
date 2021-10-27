import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { newsReducer as News } from './news/news.reducer';
import User from './user/user.reducer';
import { themeState as Theme } from './theme/theme.reducer';
import { errorReducer as Error } from './error/error.reducer';
import Language from './language/language.reducer';
import Products from './products/products.reducer';
import { cartReducer as Cart } from './cart/cart.reducer';
import { snackbarReducer as Snackbar } from './snackbar/snackbar.reducer';
import Currency from './currency/currency.reducer';
import Comments from './comments/comments.reducer';
import { checkoutReducer as Checkout } from './checkout/checkout.reducer';
import Chat from './chat/chat.reducer';
import { businessPagesReducer as HeaderLinks } from './header-links/header-links.reducer';
import Pattern from './pattern/pattern.reducer';
import Constructor from './images-constructor/constructor.reducer';
import { toastReducer as Toast } from './toast/toast.reducer';
import { orderReducer as Order } from './order/order.reducer';

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
    Cart,
    Snackbar,
    Currency,
    Comments,
    Checkout,
    Chat,
    HeaderLinks,
    Pattern,
    Constructor,
    Order
  });
