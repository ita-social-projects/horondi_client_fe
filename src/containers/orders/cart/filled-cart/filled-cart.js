import React from 'react';
import { useSelector } from 'react-redux';

import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';
import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import SimilarProducts from '../../../../pages/product-details/similar-products';
import CreateOrder from '../../order/create-order/create-order';

const FilledCart = ({ items }) => {
  const styles = useStyles();
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));

  const currencySign =
    currency === 0 ? faHryvnia : currency === 1 ? faDollarSign : '';

  const calcPrice = (item) =>
    (item.basePrice[currency].value +
      item.selectedSize.additionalPrice[currency].value +
      item.bottomMaterial.material.additionalPrice[currency].value) *
    item.quantity;

  const totalPrice = items.reduce((acc, item) => acc + calcPrice(item), 0);
  return (
    <div className={styles.root} data-cy='filled-cart'>
      <div className={styles.orderWrapper}>
        <div className={styles.orderTable}>
          <OrderTable
            calcPrice={calcPrice}
            currency={currency}
            items={items}
            language={language}
          />
        </div>
        <div className={styles.createOrder}>
          <CreateOrder
            language={language}
            totalPrice={totalPrice}
            currency={currency}
          />
        </div>
      </div>
      <div className={styles.similarProductsWrapper}>
        <SimilarProducts currencySign={currencySign} />
      </div>
    </div>
  );
};

export default FilledCart;
