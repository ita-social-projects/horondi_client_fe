import React from 'react';
import { useSelector } from 'react-redux';

import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';

import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import SimilarProducts from '../../../../pages/product-details/similar-products';
import DeliveryType from '../../order/delivery-type/delivery-type';
import { calcPriceForCart } from '../../../../utils/priceCalculating';
import { selectCurrencySign } from '../../../../utils/currency';

const FilledCart = ({ items }) => {
  const styles = useStyles();
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));

  const totalPrice = items.reduce((acc, item) => acc + calcPriceForCart(item, currency), 0);

  const currencySign = selectCurrencySign(currency, faHryvnia, faDollarSign);

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
      <>
        <SimilarProducts />
      </>
    </div>
  );
};

export default FilledCart;
