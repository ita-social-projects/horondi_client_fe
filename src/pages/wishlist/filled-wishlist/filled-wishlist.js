import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './filled-wishlist.styles';
import WishlistItem from '../wishlist-item';
import Modal from '../../../components/modal';
import { removeItemFromWishlist } from '../../../redux/wishlist/wishlist.actions';

const FilledWishlist = ({ items }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const { t } = useTranslation();
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
            <th>{t('wishlist.wishlistTableFields.item')}</th>
            <th>{t('wishlist.wishlistTableFields.price')}</th>
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
            message={t('modal.modalDeleteFromWishlistMessage')}
            isOpen={modalVisibility}
            onAction={onModalAction}
            language={language}
          />
        </div>
      )}
    </>
  );
};

export default FilledWishlist;
