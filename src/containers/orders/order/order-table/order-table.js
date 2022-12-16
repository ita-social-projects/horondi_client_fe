import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from './order-table.styles';

import CartItem from '../../cart/cart-item';
import ConfirmDialog from '../../../../components/confirm-dialog';
import PageTitle from '../../../../components/page-title/page-title';

const OrderTable = ({ items, user, cartOperations, promoCode, certificateData }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const styles = useStyles();
  const [removeOneModalVisibility, setRemoveOneModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const { removeFromCart } = cartOperations;
  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      language={language}
      user={user}
      setModalVisibility={setRemoveOneModalVisibility}
      setModalItem={setModalItem}
      cartOperations={cartOperations}
      promoCode={promoCode}
      certificateData={certificateData}
    />
  ));

  const onRemoveOneModalAction = (action) => {
    if (action) {
      removeFromCart(modalItem);
    }
    setRemoveOneModalVisibility(false);
  };
  return (
    <div className={styles.root}>
      {removeOneModalVisibility && (
        <ConfirmDialog
          title={t('common.modalHeader')}
          message={t('cart.deleteItem')}
          isOpen={removeOneModalVisibility}
          onAction={onRemoveOneModalAction}
          confirmButtonText={t('common.buttons.confirm')}
          dismisButtonText={t('common.buttons.cancel')}
        />
      )}
      <PageTitle title={t('cart.titleFilled')} />
      <div className={styles.table}>
        <Table>
          <TableHead>
            <TableRow
              classes={{
                root: styles.tableHeader
              }}
            >
              <TableCell>{t('cart.product')}</TableCell>
              <TableCell>{t('cart.size')}</TableCell>
              <TableCell>{t('cart.price')}</TableCell>
              <TableCell>{t('cart.quantity')}</TableCell>
              <TableCell>{t('cart.toPay')}</TableCell>
              <TableCell>{t('cart.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{cartItems}</TableBody>
        </Table>
      </div>
    </div>
  );
};
export default OrderTable;
