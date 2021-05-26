import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useStyles } from './order-item-card.styles';
import { IMG_URL } from '../../../../configs';
import { THANKS_PAGE_TITLE } from '../../../../translations/thanks-page.translations';

const OrderItemCard = ({ item, currency, language, isLightTheme }) => {
  const styles = useStyles({ isLightTheme });
  const currencySign = currency ? faDollarSign : faHryvnia;

  return (
    <TableRow classes={{ root: styles.root }}>
      <TableCell classes={{ root: styles.image }}>
        <img
          src={`${IMG_URL}${item.product.images.primary.thumbnail}`}
          alt={THANKS_PAGE_TITLE[language].alt}
          className={styles.imgItem}
        />
      </TableCell>
      <TableCell classes={{ root: styles.description }}>
        <p>{item.product.name[language].value}</p>
        <p>{`${THANKS_PAGE_TITLE[language].size} ${item.options.size.name}`}</p>
      </TableCell>
      <TableCell className={styles.description}>{item.quantity}</TableCell>
      <TableCell classes={{ root: styles.description }}>
        {item.fixedPrice[currency].value} <FontAwesomeIcon icon={currencySign} />
      </TableCell>
    </TableRow>
  );
};

export default OrderItemCard;
