import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import { useStyles } from './order-history-item-product.styles';
import { getCurrencySign } from '../../../../utils/currency';
import { IMG_URL } from '../../../../configs';

const OrderHistoryItemProduct = ({ item, currency }) => {
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
          <p className={styles.productName}>{t(`${item.product.translationsKey}.name`)}</p>
          <p className={styles.productBottom}>
            {t('cart.bottomMaterial')} -{' '}
            {t(`${item.product.bottomMaterial.material.translationsKey}.name`)}
          </p>
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
