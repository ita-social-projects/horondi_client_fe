import React from 'react';
import { useTranslation } from 'react-i18next';
import { TableCell, TableRow } from '@material-ui/core';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useStyles } from './order-item-card.styles';
import { IMG_URL } from '../../../../configs';

const OrderItemCard = ({ item, currency, language, isLightTheme }) => {
  const styles = useStyles({ isLightTheme });
  const { t } = useTranslation();
  const currencySign = currency ? faDollarSign : faHryvnia;

  return (
    <TableRow classes={{ root: styles.root }}>
      <TableCell classes={{ root: styles.image }}>
        <img
          src={`${IMG_URL}${item.product.images.primary.thumbnail}`}
          alt={t('thanksPage.thanksPageTitle.alt')}
          className={styles.imgItem}
        />
      </TableCell>
      <TableCell classes={{ root: styles.description }}>
        <p>{item.product.name[language].value}</p>
        <p>{`${t('thanksPage.thanksPageTitle.size')} ${item.options.size.name}`}</p>
      </TableCell>
      <TableCell className={styles.description}>{item.quantity}</TableCell>
      <TableCell classes={{ root: styles.description }}>
        {item.fixedPrice[currency].value} <FontAwesomeIcon icon={currencySign} />
      </TableCell>
    </TableRow>
  );
};

export default OrderItemCard;
