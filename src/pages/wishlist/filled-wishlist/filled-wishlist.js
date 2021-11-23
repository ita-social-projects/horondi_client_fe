import React, { useContext, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from './filled-wishlist.styles';
import WishlistItem from '../wishlist-item';
import Modal from '../../../components/modal';
import ThemeContext from '../../../context/theme-context';
import useDeleteProductFromWishlistHandler from '../../../hooks/use-delete-product-from-wishlist-handler';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';
import EmptyWishlist from '../empty-wishlist';
import SimilarProducts from '../../product-details/similar-products';

const FilledWishlist = ({ items }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [wishlist, setWishlist] = useState(items || []);
  const [similarProductsList, setSimilarProductsList] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const modalAnchorElRef = useRef();

  const { t, i18n } = useTranslation();

  const [isLightTheme] = useContext(ThemeContext);

  const language = i18n.language === 'ua' ? 0 : 1;
  const styles = useStyles(isLightTheme);
  const [{ error, loading, wishlist: updatedWishlist }, deleteItemFromWishlist] =
    useDeleteProductFromWishlistHandler();

  useEffect(() => {
    setAnchorEl(modalAnchorElRef.current);
  }, [modalAnchorElRef]);

  useEffect(() => {
    updatedWishlist && setWishlist(updatedWishlist);
  }, [updatedWishlist]);

  useEffect(() => {
    setSimilarProductsList(
      items.map((item) => ({
        product: {
          ...item,
          mainMaterial: {
            _id: item.mainMaterial.material._id,
            color: {
              _id: item.mainMaterial.material.colors
                ? item.mainMaterial.material.colors[0]._id
                : item.mainMaterial.material.color
            }
          }
        }
      }))
    );
  }, [items]);

  if (loading || error) return errorOrLoadingHandler(error, loading);

  if (!wishlist.length) return <EmptyWishlist />;

  const onModalAction = (action) => {
    if (action) {
      deleteItemFromWishlist(modalItem);
    }
    setModalVisibility(false);
  };

  return (
    <>
      <div className={styles.root} ref={modalAnchorElRef}>
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
                    setAnchorEl(modalAnchorElRef.current);
                    setModalVisibility(!modalVisibility);
                  }}
                  setModalItem={setModalItem}
                />
              ))}
            </TableBody>
          </Table>
        </div>
        {modalVisibility && (
          <div>
            <Modal
              anchorEl={anchorEl}
              itemName={modalItem.name[language].value}
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
