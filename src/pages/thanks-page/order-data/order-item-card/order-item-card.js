import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';

import { useStyles } from './order-item-card.styles';
import { DEFAULT_CURRENCY, IMG_URL } from '../../../../configs';
import { CHECKOUT_TITLES } from '../../../../translations/checkout.translations';
import { THANKS_PAGE_TITLE } from '../../../../translations/thanks-page.translations';

const OrderItemCard = ({ item, currency, language, isLightTheme }) => {
  const styles = useStyles({ isLightTheme });

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
        {`${item.fixedPrice[currency].value} ${
          currency === DEFAULT_CURRENCY
            ? CHECKOUT_TITLES[language].UAH
            : CHECKOUT_TITLES[language].USD
        }`}
      </TableCell>
    </TableRow>
  );
};

export default OrderItemCard;
