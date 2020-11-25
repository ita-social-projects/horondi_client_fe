import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import OrderTable from '../../order/order-table';
import Modal from '../../../../components/modal';
import { MODAL_DELETE_MESSAGES } from '../../../../translations/modal.translations';
import { removeItemFromCart } from '../../../../redux/cart/cart.actions';
import CartItem from '../cart-item';
import { useStyles } from './filled-cart.styles';
import { Button } from '@material-ui/core';
import { CART_BUTTON_TITLES } from '../../../../translations/cart.translations';
import SimilarProducts from '../../../../pages/product-details/similar-products/similar-products';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';
import {
  getFiltredProducts,
  getProduct,
  setCategoryFilter
} from '../../../../redux/products/products.actions';

const FilledCart = ({ items, categories }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const styles = useStyles();
  const dispatch = useDispatch();
  const { language, goods, currency } = useSelector(
    ({
      Language,
      Currency,
      Products: { product, productLoading, productToSend }
    }) => ({
      language: Language.language,
      currency: Currency.currency,
      isLoading: productLoading,
      goods: product,
      productToSend
    })
  );
  useEffect(() => {
    dispatch(getProduct(items[0]._id));
    window.scrollTo(0, 0);
  }, [items[0]._id, dispatch]);

  useEffect(() => {
    if (goods) {
      const categoryFilter = categories.filter((item) => {
        return goods.category.name[0].value === item.name[0].value;
      });
      dispatch(setCategoryFilter([categoryFilter[0]._id]));
    }
  }, [goods]);
  useEffect(() => {
    if (goods) {
      dispatch(getFiltredProducts({}));
    }
  }, [dispatch, goods]);

  const currencySign =
    currency === 0 ? faHryvnia : currency === 1 ? faDollarSign : '';

  const onModalAction = (action) => {
    action && dispatch(removeItemFromCart(modalItem));
    setModalVisibility(false);
  };

  const orderList = items.map((item, index) => (
    <CartItem
      key={index}
      item={item}
      language={language}
      currency={currency}
      setModalVisibility={setModalVisibility}
      setModalItem={setModalItem}
    />
  ));

  const totalPrice = items.reduce(
    (acc, item) => acc + item.totalPrice[currency].value * item.quantity,
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
        <Link to='/'>
          <Button className={styles.btnCreateOrder}>
            {CART_BUTTON_TITLES[language].home}
          </Button>
        </Link>
        <Link to='/backpacks/rolltop'>
          <Button className={styles.btnCreateOrder}>
            {CART_BUTTON_TITLES[language].goods}
          </Button>
        </Link>
      </div>
      {goods ? (
        <div>
          <SimilarProducts currencySign={currencySign} />
        </div>
      ) : null}
    </div>
  );
};

export default FilledCart;
