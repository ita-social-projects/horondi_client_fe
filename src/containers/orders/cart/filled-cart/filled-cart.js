import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';
import OrderTable from '../../order/order-table';
import Modal from '../../../../components/modal';
import { MODAL_DELETE_MESSAGES } from '../../../../translations/modal.translations';
import { removeItemFromCart } from '../../../../redux/cart/cart.actions';
import CartItem from '../cart-item';
import { useStyles } from './filled-cart.styles';
import { CART_BUTTON_TITLES } from '../../../../translations/cart.translations';
import SimilarProducts from '../../../../pages/product-details/similar-products/similar-products';
import {
  getCartItems,
  getFiltredProducts,
  getProduct,
  setCategoryFilter
} from '../../../../redux/products/products.actions';

const FilledCart = ({ items, categories }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const styles = useStyles();
  const dispatch = useDispatch();
  const { language, prods, currency, cart, loading } = useSelector(
    ({ Language, Currency, Products }) => ({
      language: Language.language,
      currency: Currency.currency,
      prods: Products,
      cart: Products.cartItems,
      loading: Products.productLoading
    })
  );

  useEffect(() => {
    dispatch(getCartItems(items));
  }, [JSON.stringify(cart), dispatch]);

  console.log(prods);
  console.log(cart);
  const currencySign =
    currency === 0 ? faHryvnia : currency === 1 ? faDollarSign : '';

  const onModalAction = (action) => {
    action && dispatch(removeItemFromCart(modalItem));
    setModalVisibility(false);
  };

  const orderList =
    cart &&
    cart.map((item, index) => {
      item.quantity = 1;
      return (
        <CartItem
          key={index}
          item={item}
          language={language}
          currency={currency}
          setModalVisibility={setModalVisibility}
          setModalItem={setModalItem}
        />
      );
    });
  // const totalPrice = 0;
  const totalPrice = cart.reduce(
    (acc, item) =>
      acc +
      item.basePrice[currency].value *
        // item.quantity,
        1,
    0
  );

  return (
    <div className={styles.root} data-cy='filled-cart'>
      <OrderTable
        items={orderList}
        totalPrice={totalPrice / 100}
        currency={currency ? 'USD' : 'UAH'}
      />
      {modalVisibility && (
        <div>
          <Modal
            itemName={modalItem.name[language].value}
            message={MODAL_DELETE_MESSAGES[language]}
            isOpen={modalVisibility}
            onAction={onModalAction}
            language={language}
          />
        </div>
      )}
      <div className={styles.btnWrapper}>
        <Link to='/backpacks/rolltop'>
          <Button className={styles.btnCreateOrder}>
            {CART_BUTTON_TITLES[language].goods}
          </Button>
        </Link>
        <Link to='/'>
          <Button className={styles.btnCreateOrder}>
            {CART_BUTTON_TITLES[language].checkout}
          </Button>
        </Link>
      </div>
      {cart ? (
        <div>{/* <SimilarProducts currencySign={currencySign} /> */}</div>
      ) : null}
    </div>
  );
};

export default FilledCart;
