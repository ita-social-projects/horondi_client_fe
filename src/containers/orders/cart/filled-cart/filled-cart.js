import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilledOrder from '../../order/filled-order';
import Modal from '../../../../components/modal';
import { MODAL_DELETE_MESSAGES } from '../../../../translations/modal.translations';
import { removeItemFromCart } from '../../../../redux/cart/cart.actions';
import CartItem from '../cart-item';

const FilledCart = ({ items }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const dispatch = useDispatch();
  const language = useSelector(({ Language }) => Language.language);

  const onModalAction = (action) => {
    action && dispatch(removeItemFromCart(modalItem));
    setModalVisibility(false);
  };

  const orderList = items.map((item, index) => (
    <CartItem
      key={index}
      item={item}
      language={language}
      setModalVisibility={setModalVisibility}
      setModalItem={setModalItem}
    />
  ));

  const totalPrice = items
    .reduce((acc, item) => acc + item.totalPrice * item.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <FilledOrder
        name='filled-cart'
        items={orderList}
        totalPrice={totalPrice}
        currency='UAH'
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
