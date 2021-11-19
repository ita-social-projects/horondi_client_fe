import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import { useStyles } from './order-history-order-item.styles';
import { getCurrencySign } from '../../../../utils/currency';
import { IMG_URL } from '../../../../configs';

const OrderHistoryItemProduct = ({ item, language, currency }) => {
  const styles = useStyles();
  const currencySign = getCurrencySign(currency);
  const fixedPriceProduct = item.fixedPrice[currency].value;
  const { t } = useTranslation();

  return (
    <>
      <TableRow className={styles.root}>
        <TableCell className={styles.image}>
          <img
            src={`${IMG_URL}${item.product.images.primary.thumbnail}`}
            alt='img-product'
            className={styles.imgItem}
          />
        </TableCell>
        <TableCell className={styles.description}>
          <p>{item.product.name[language].value}</p>
          <p>{`${t('cart.bottomMaterial')} - ${item.options.size.name}`}</p>
        </TableCell>
        <TableCell className={styles.description}>{item.options.size.name}</TableCell>
        <TableCell className={styles.description}>
          <FontAwesomeIcon icon={currencySign} />
          {fixedPriceProduct}
        </TableCell>
        <TableCell className={styles.description}>{item.quantity}</TableCell>
        <TableCell className={styles.description}>
          <FontAwesomeIcon icon={currencySign} />
          {item.quantity * fixedPriceProduct}
        </TableCell>
      </TableRow>
    </>
  );
};

export default OrderHistoryItemProduct;
