import React, { useState } from 'react';
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
import routes from '../../../../configs/routes';
import SimilarProducts from '../../../../pages/product-details/similar-products/similar-products';

const FilledCart = ({ items, categories }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const styles = useStyles();
  const dispatch = useDispatch();
  const { pathToBackpacks, pathToCheckout } = routes;
  const { language, prods, currency, cart, loading } = useSelector(
    ({ Language, Currency, Products }) => ({
      language: Language.language,
      currency: Currency.currency,
      prods: Products,
      cart: Products.cartItems,
      loading: Products.productLoading
    })
  );

  const currencySign =
    currency === 0 ? faHryvnia : currency === 1 ? faDollarSign : '';

  const onModalAction = (action) => {
    action && dispatch(removeItemFromCart(modalItem));
    setModalVisibility(false);
  };

  const calcPrice = (item) => (
    (item.basePrice[currency].value +
        item.selectedSize.additionalPrice[currency].value +
        item.bottomMaterial.material.additionalPrice[currency].value) *
      item.quantity
  );
  const orderList = items.map((item, index) => (
    <CartItem
      key={index}
      item={item}
      calcPrice={calcPrice}
      language={language}
      currency={currency}
      setModalVisibility={setModalVisibility}
      setModalItem={setModalItem}
    />
  ));

  const totalPrice = items.reduce((acc, item) => acc + calcPrice(item), 0);

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
        <Link to={pathToBackpacks}>
          <Button className={styles.btnCreateOrder}>
            {CART_BUTTON_TITLES[language].goods}
          </Button>
        </Link>
        <Link to={pathToCheckout}>
          <Button className={styles.btnCreateOrder}>
            {CART_BUTTON_TITLES[language].checkout}
          </Button>
        </Link>
      </div>
      <div>{/* <SimilarProducts currencySign={currencySign} /> */}</div>
    </div>
  );
};

export default FilledCart;
