import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './filled-wishlist.styles';
import WishlistItem from '../wishlist-item';
import { WISHLIST_TABLE_FIELDS } from '../../../translations/wishlist.translations';
import { MODAL_DELETE_MESSAGES } from '../../../translations/modal.translations';
import Modal from '../../../components/modal';
import { removeItemFromWishlist } from '../../../redux/wishlist/wishlist.actions';

const FilledWishlist = ({ items }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [itemInAction, setItemInAction] = useState({});

  const language = useSelector(({ Language }) => Language.language);
  const dispatch = useDispatch();
  const styles = useStyles();

  const onRemoveItem = () => {
    setModalVisibility(true);
  };

  const onModalAction = (action) => {
    action && dispatch(removeItemFromWishlist(itemInAction));
    setModalVisibility(false);
  };

  const onAddToCart = (item) => dispatch();

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>{WISHLIST_TABLE_FIELDS[language].item}</th>
            <th>{WISHLIST_TABLE_FIELDS[language].price}</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {items.map((item, i) => (
            <WishlistItem
              key={i}
              item={item}
              onAddToCart={onAddToCart}
              onRemoveItem={onRemoveItem}
              setItemInAction={setItemInAction}
            />
          ))}
        </tbody>
      </table>
      {modalVisibility && (
        <Modal
          itemName={itemInAction.name[language].value}
          message={MODAL_DELETE_MESSAGES[language]}
          isOpen={modalVisibility}
          onAction={onModalAction}
          language={language}
        />
      )}
    </>
  );
};

export default FilledWishlist;
