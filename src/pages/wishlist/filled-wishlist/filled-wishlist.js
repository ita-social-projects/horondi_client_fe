import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './filled-wishlist.styles';
import WishlistItem from '../wishlist-item';
import Modal from '../../../components/modal';
import ThemeContext from '../../../context/theme-context';
import EmptyWishlist from '../empty-wishlist';
import SimilarProducts from '../../product-details/similar-products';
import { setToastMessage, setToastSettings } from '../../../redux/toast/toast.actions';
import { TOAST_SETTINGS } from '../../product-details/constants';
import { useCart } from '../../../hooks/use-cart';
import { useWishlist } from '../../../hooks/use-wishlist';

const FilledWishlist = ({ items }) => {
  const { currency, userData } = useSelector(({ Currency, User }) => ({
    currency: Currency.currency,
    userData: User.userData
  }));
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [wishlist, setWishlist] = useState(items || []);
  const [similarProductsList, setSimilarProductsList] = useState([]);
  const { cartOperations, isInCart } = useCart(userData);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const [isLightTheme] = useContext(ThemeContext);

  const language = i18n.language === 'ua' ? 0 : 1;
  const styles = useStyles(isLightTheme);

  const { wishlist: updatedWishlist, wishlistOperations } = useWishlist();
  const { removeFromWishlist } = wishlistOperations;

  useEffect(() => {
    updatedWishlist && setWishlist([...updatedWishlist].reverse());
  }, [updatedWishlist]);

  useEffect(() => {
    setSimilarProductsList(
      items.map((item) => ({
        productId: item._id
      }))
    );
  }, [items]);

  if (!wishlist.length) return <EmptyWishlist />;

  const onModalAction = (action) => {
    setModalVisibility(false);
    if (action) {
      removeFromWishlist(modalItem);
      dispatch(setToastMessage(t('product.toastMessage.removedFromWishList')));
      dispatch(setToastSettings(TOAST_SETTINGS));
    }
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.title}>{t('wishlist.wishlistTitles.filled')}</div>
        <div className={styles.table}>
          <Table>
            <TableHead>
              <TableRow classes={{ root: styles.tableHeader }}>
                <TableCell>{t('wishlist.wishlistTableFields.item')}</TableCell>
                <TableCell>{t('wishlist.wishlistTableFields.price')}</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {wishlist.map((item, i) => (
                <WishlistItem
                  key={i}
                  item={item}
                  setModalVisibility={() => {
                    setModalVisibility(!modalVisibility);
                  }}
                  cartOperations={cartOperations}
                  isInCart={isInCart}
                  setModalItem={setModalItem}
                  currency={currency}
                />
              ))}
            </TableBody>
          </Table>
        </div>
        {modalVisibility && (
          <div>
            <Modal
              itemName={t(`${modalItem.translationsKey}.name`)}
              message={t('modal.modalDeleteFromWishlistMessage')}
              isOpen={modalVisibility}
              onAction={onModalAction}
              language={language}
            />
          </div>
        )}
      </div>
      <SimilarProducts cartList={similarProductsList} />
    </>
  );
};

export default FilledWishlist;
