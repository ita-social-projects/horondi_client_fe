import React from 'react';
import { Checkbox, TableCell, TableRow } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CART_TABLE_FIELDS } from '../../../../translations/cart.translations';
import DoneIcon from '@material-ui/icons/Done';
import NumberInput from '../../../../components/number-input';
import { useStyles } from '../../../../containers/orders/cart/cart-item/cart-item.styles';
import { IMG_URL } from '../../../../configs';

const OrderItemCard = ({ item, currency,language }) => {
  const styles = useStyles({ image: `${IMG_URL}${item.product.images.primary.thumbnail}` });

  return (
    <TableRow classes={{ root: styles.root }}>
      <TableCell classes={{ root: styles.image }}>
        {/*<Link to={`/product/${item._id}`}>*/}
        {/*  <b />*/}
        {/*</Link>*/}
      </TableCell>
      <TableCell
        classes={{ root: styles.description }}
        data-cy='cart-item-description'
      >
      </TableCell>
      <TableCell>
        {item.quantity}
      </TableCell>
      <TableCell classes={{ root: styles.price }}>
        {item.fixedPrice[currency].value}
      </TableCell>
    </TableRow>

  );
};

export default OrderItemCard;
