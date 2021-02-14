import React from 'react';
import { useSelector } from 'react-redux';

import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import SimilarProducts from '../../../../pages/product-details/similar-products';
import DeliveryType from '../../order/delivery-type/delivery-type';
import { calcPrice } from '../../../../utils/priceCalculating';

const FilledCart = ({ items }) => {
  const styles = useStyles();
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));

  const totalPrice = items.reduce(
    (acc, item) => acc + calcPrice(item, currency),
    0
  );

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
        <>
          <DeliveryType
            language={language}
            totalPrice={totalPrice}
            currency={currency}
          />
        </>
      </div>
      <>
        <SimilarProducts />
      </>
    </div>
  );
};

export default FilledCart;
