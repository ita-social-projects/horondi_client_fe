import React from 'react';
// import { useSelector } from 'react-redux';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

import { useStyles } from './cart.styles';
import EmptyCart from './empty-cart';
// import { CART_TITTLES } from '../../translations/cart.translations';
// import { CART_IMAGES } from '../../configs';

const Cart = () => {

  /*  const {language, cartItems} = useSelector(({Language, Cart}) => (
    {
      language: Language.language,
      cartItems: Cart.list
    }
  )) */
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <EmptyCart />
    </div>
  );
};

export default Cart;
