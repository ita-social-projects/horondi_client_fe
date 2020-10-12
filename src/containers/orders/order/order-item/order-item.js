import React from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

import { useStyles } from './order-item.styles';
import { CART_TABLE_FIELDS } from '../../../../translations/cart.translations';
import NumberInput from '../../../../components/number-input';
import { IMG_URL } from '../../../../configs';

const OrderItem = ({
  item,
  onChangeQuantity,
  onRemoveItem,
  language,
  isInCart,
  name
}) => {
  const styles = useStyles({ image: `${IMG_URL}${item.images.primary.large}` });

  return (
    <div className={styles.root} data-cy={name}>
      <div className={styles.itemData}>
        <div className={styles.image} data-cy={`${name}-img`}>
          <Link to={item.productUrl}>
            <b />
          </Link>
        </div>
        <div className={styles.description} data-cy={`${name}-description`}>
          <Link to={item.productUrl}>
            <span className={styles.itemName}>{item.name[language].value}</span>
          </Link>
          <span>
            {CART_TABLE_FIELDS[language].size}: {item.selectedSize.name}
          </span>
          {item.bagBottom.value && (
            <span>
              {CART_TABLE_FIELDS[language].bagBottom}:{' '}
              {item.bagBottom.name[language].value}
            </span>
          )}
          {item.sidePocket.isSelected && (
            <span>
              {CART_TABLE_FIELDS[language].sidePocket}:{' '}
              <DoneIcon className={styles.doneIcon} />
            </span>
          )}
        </div>
      </div>
      <div>
        {isInCart ? (
          <NumberInput
            quantity={item.quantity}
            onChangeQuantity={onChangeQuantity}
          />
        ) : (
          <span>{item.quantity}</span>
        )}
      </div>
      <div className={styles.price}>
        <span>{item.totalPrice.toFixed(2)} UAH</span>
        {isInCart ? (
          <DeleteIcon
            className={styles.trash}
            onClick={onRemoveItem}
            data-cy={`${name}-remove`}
          />
        ) : null}
      </div>
    </div>
  );
};

export default OrderItem;
