import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './filled-wishlist.styles';
import WishlistItem from '../wishlist-item';
import { WISHLIST_TABLE_FIELDS } from '../../../translations/wishlist.translations';
import Modal from '../../../components/modal';
import { MODAL_DELETE_MESSAGES } from '../../../translations/modal.translations';
import { removeItemFromWishlist } from '../../../redux/wishlist/wishlist.actions';

const FilledWishlist = ({ items }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const dispatch = useDispatch();

  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  const onModalAction = (action) => {
    action && dispatch(removeItemFromWishlist(modalItem._id));
    setModalVisibility(false);
  };

  return (
    <>
      <table className={styles.table} data-cy='filled-wishlist'>
        <thead className={styles.tableHeader}>
          <tr>
            <th>{WISHLIST_TABLE_FIELDS[language].item}</th>
            <th>{WISHLIST_TABLE_FIELDS[language].price}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <WishlistItem
              key={i}
              item={item}
              setModalVisibility={setModalVisibility}
              setModalItem={setModalItem}
            />
          ))}
        </tbody>
      </table>
      {modalVisibility && (
        <div>
          <Modal
            itemName={modalItem.name[language].value}
            message={MODAL_DELETE_MESSAGES[language]}
            isOpen={modalVisibility}
            onAction={onModalAction}
            language={language}
            className={styles.modal}
          />
        </div>
      )}
    </>
  );
};

export default FilledWishlist;
