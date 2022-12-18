import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useStyles } from './filled-wishlist.styles';
import WishlistItem from '../wishlist-item';
import ConfirmDialog from '../../../components/confirm-dialog';
import EmptyWishlist from '../empty-wishlist';
import SimilarProducts from '../../product-details/similar-products';
import { setToastMessage, setToastSettings } from '../../../redux/toast/toast.actions';
import { TOAST_SETTINGS } from '../../product-details/constants';
import { useCart } from '../../../hooks/use-cart';
import { useWishlist } from '../../../hooks/use-wishlist';
import PathBack from '../../../containers/orders/cart/path-back/path-back';
import routes from '../../../configs/routes';
import PageTitle from '../../../components/page-title/page-title';

const FilledWishlist = ({ items }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [wishlist, setWishlist] = useState(items || []);
  const [similarProductsList, setSimilarProductsList] = useState([]);
  const { cartOperations, isInCart } = useCart();

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const itemName = t(`${modalItem.translationsKey}.name`);

  const styles = useStyles();

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
        <PathBack
          className={styles.pathBack}
          categoryLink={routes.pathToCategory}
          categoryText='cart.pathBack.toCatalog'
          currentPageText='wishlist.wishlistTitles.filled'
        />
        <PageTitle title={t('wishlist.wishlistTitles.filled')} marginForCrumbs />
        <div className={styles.table}>
          <Table>
            <TableHead>
              <TableRow classes={{ root: styles.tableHeader }}>
                <TableCell>{t('wishlist.wishlistTableFields.item')}</TableCell>
                <TableCell>{t('wishlist.wishlistTableFields.price')}</TableCell>
                <TableCell>{t('wishlist.wishlistTableFields.actions')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wishlist.map((item, i) => (
                <WishlistItem
                  key={item._id}
                  item={item}
                  setModalVisibility={() => {
                    setModalVisibility(!modalVisibility);
                  }}
                  wishlistOperations={wishlistOperations}
                  cartOperations={cartOperations}
                  isInCart={isInCart}
                  setModalItem={setModalItem}
                />
              ))}
            </TableBody>
          </Table>
        </div>
        {modalVisibility && (
          <ConfirmDialog
            title={t('common.modalHeader')}
            isOpen={modalVisibility}
            onAction={onModalAction}
            message={`${t('modal.modalDeleteFromWishlistMessage')} ${itemName}?`}
            confirmButtonText={t('common.buttons.confirm')}
            dismisButtonText={t('common.buttons.cancel')}
          />
        )}
      </div>
      <SimilarProducts cartList={similarProductsList} />
    </>
  );
};

export default FilledWishlist;
