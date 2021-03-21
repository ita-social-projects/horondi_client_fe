import React from 'react';
import { useSelector } from 'react-redux';

import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import DeliveryType from '../../order/delivery-type/delivery-type';
import { calcPriceForCart } from '../../../../utils/priceCalculating';

const FilledCart = ({ items }) => {
  const styles = useStyles();
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));

  const totalPrice = items.reduce(
    (acc, item) => acc + calcPriceForCart(item, currency, item.quantity),
    0
  );

  return (
    <div className={styles.root} data-cy='filled-cart'>
      <div className={styles.orderWrapper}>
        <div className={styles.orderTable}>
          <OrderTable
            calcPrice={calcPriceForCart}
            currency={currency}
            items={items}
            language={language}
          />
        </div>
        <>
          <DeliveryType language={language} totalPrice={totalPrice} currency={currency} />
        </>
      </div>
      <></>
    </div>
  );
};

export default FilledCart;
