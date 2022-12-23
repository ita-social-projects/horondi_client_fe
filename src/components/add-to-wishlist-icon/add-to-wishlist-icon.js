import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton, Tooltip } from '@material-ui/core';
import { useWishlist } from '../../hooks/use-wishlist';
import { TOAST_SETTINGS } from '../../pages/product-details/constants';
import { setToastMessage, setToastSettings } from '../../redux/toast/toast.actions';
import Toast from '../../containers/toast';
import { useStyles } from './add-to-wishlist-icon.styles';

const AddToWishListIcon = ({ product, className }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isOpenedSnackbar, setIsOpenedSnackbar] = useState(false);
  const { isInWishlist, wishlistOperations } = useWishlist();
  const styles = useStyles();
  const itemInWishlist = isInWishlist(product);

  const { addToWishlist, removeFromWishlist } = wishlistOperations;

  const addToWishlistIcon = itemInWishlist ? (
    <FavoriteIcon data-cy='wishful' />
  ) : (
    <FavouriteBorderIcon data-cy='not-wishful' />
  );
  const wishlistTip = itemInWishlist
    ? t('product.tooltips.removeWishful')
    : t('product.tooltips.addWishful');

  const wishlistHandler = useCallback(() => {
    if (!isInWishlist(product)) {
      addToWishlist(product);
    } else {
      removeFromWishlist(product);
    }

    if (itemInWishlist) {
      dispatch(setToastMessage(t('product.toastMessage.removedFromWishList')));
      dispatch(setToastSettings(TOAST_SETTINGS));
    } else {
      dispatch(setToastMessage(t('product.toastMessage.addedToWishList')));
      dispatch(setToastSettings(TOAST_SETTINGS));
    }
    setIsOpenedSnackbar(true);
  }, [addToWishlist, dispatch, isInWishlist, itemInWishlist, product, removeFromWishlist, t]);

  return (
    <>
      <Tooltip className={className} title={wishlistTip} placement='bottom'>
        <IconButton
          disabled={product.isDeleted}
          className={styles.heart}
          onClick={wishlistHandler}
          data-testid='addToWishlist'
        >
          {addToWishlistIcon}
        </IconButton>
      </Tooltip>
      <Toast
        isOpenedSnackbar={isOpenedSnackbar}
        setIsOpenedSnackbar={setIsOpenedSnackbar}
        message={t(
          `product.toastMessage.${itemInWishlist ? 'addedToWishList' : 'removedFromWishList'}`
        )}
      />
    </>
  );
};

export default AddToWishListIcon;
