import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import Modal from '../../../components/modal';
import { useStyles } from './wishlist-item.styles';
import { removeItemFromWishlist } from '../../../redux/wishlist/wishlist.actions';
import { WISHLIST_BUTTONS } from '../../../translations/wishlist.translations';
import { MODAL_DELETE_MESSAGES } from '../../../translations/modal.translations';

const WishlistItem = ({ item }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  const onRemoveItem = () => {
    setModalVisibility(true);
  };

  const onModalAction = (action) => {
    action && dispatch(removeItemFromWishlist(item));
    setModalVisibility(false);
  };

  return (
    <>
      <tr className={styles.root}>
        <td className={styles.product}>
          <div className={styles.image}>
            <Link to={`/${item.category}/${item._id}`}>
              <img src={item.images} alt='product pictures' />
            </Link>
          </div>
          <div className={styles.description}>
            <Link to={`/${item.category}/${item._id}`}>
              <span className={styles.itemName}>
                {item.name[language].value}
              </span>
            </Link>
            <Button variant='contained'>
              <Link to={`/${item.category}/${item._id}`}>
                {WISHLIST_BUTTONS[language].toItem}
              </Link>
            </Button>
          </div>
        </td>
        <td className={styles.price}>
          <span>{item.totalPrice} UAH</span>
          <DeleteIcon className={styles.trash} onClick={onRemoveItem} />
        </td>
      </tr>
      {modalVisibility && (
        <tr>
          <Modal
            itemName={item.name[language].value}
            message={MODAL_DELETE_MESSAGES[language]}
            isOpen={modalVisibility}
            onAction={onModalAction}
            language={language}
          />
        </tr>
      )}
    </>
  );
};

export default WishlistItem;
