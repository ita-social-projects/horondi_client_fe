import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import { useStyles } from './order-history-order-item.styles';
import { getCurrencySign } from '../../../../utils/currency';
import { IMG_URL } from '../../../../configs';

const OrderHistoryOrderItem = ({ item, language, currency }) => {
  const styles = useStyles();

  const data = item.props.item;
  const currencySign = getCurrencySign(currency);
  const fixedPriceProduct = data.fixedPrice[currency].value;
  const { t } = useTranslation();

  return (
    <>
      <TableRow className={styles.root}>
        <TableCell className={styles.image}>
          <img
            src={`${IMG_URL}${data.product.images.primary.thumbnail}`}
            alt='img-product'
            className={styles.imgItem}
          />
        </TableCell>
        <TableCell className={styles.description}>
          <p>{data.product.name[language].value}</p>
          <p>{`${t('orderHistory.size')} - ${data.options.size.name}`}</p>
        </TableCell>
        <TableCell className={styles.description}>{data.quantity}</TableCell>
        <TableCell className={styles.description}>
          <div className={styles.sumTotal}>
            {fixedPriceProduct}
            {'\u00A0'}
            <FontAwesomeIcon icon={currencySign} />
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default OrderHistoryOrderItem;
