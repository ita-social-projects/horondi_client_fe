import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import OrderTable from '../../order/order-table';
import Modal from '../../../../components/modal';
import { MODAL_DELETE_MESSAGES } from '../../../../translations/modal.translations';
import { removeItemFromCart } from '../../../../redux/cart/cart.actions';
import CartItem from '../cart-item';
import { useStyles } from './filled-cart.styles';

const FilledCart = ({ items }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const styles = useStyles();
  const dispatch = useDispatch();
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));

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
      <Link to='/' className={styles.backButton}>
        <KeyboardBackspaceIcon />
      </Link>
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
    </div>
  );
};

export default FilledCart;
