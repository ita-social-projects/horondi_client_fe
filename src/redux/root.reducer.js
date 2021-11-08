import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import User from './user/user.reducer';
import { errorReducer as Error } from './error/error.reducer';
import Language from './language/language.reducer';
import Products from './products/products.reducer';
import { cartReducer as Cart } from './cart/cart.reducer';
import { snackbarReducer as Snackbar } from './snackbar/snackbar.reducer';
import Currency from './currency/currency.reducer';
import Comments from './comments/comments.reducer';
import Pattern from './pattern/pattern.reducer';
import Constructor from './images-constructor/constructor.reducer';
import { toastReducer as Toast } from './toast/toast.reducer';
import { orderReducer as Order } from './order/order.reducer';

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    User,
    Error,
    Language,
    Toast,
    Products,
    Cart,
    Snackbar,
    Currency,
    Comments,
    Pattern,
    Constructor,
    Order
  });
