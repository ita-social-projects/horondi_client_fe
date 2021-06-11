import React from 'react';
import { useSelector } from 'react-redux';

import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import DeliveryType from '../../order/delivery-type/delivery-type';
import { calcPriceForCart } from '../../../../utils/priceCalculating';
import SimilarProducts from '../../../../pages/product-details/similar-products';
import { Loader } from '../../../../components/loader/loader';

const FilledCart = ({ items }) => {
  const styles = useStyles();
  const {
    language,
    currency,
    cartList,
    cartUserTotalPrice,
    cartLoading,
    cartQuantityLoading,
    user
  } = useSelector(({ Language, Currency, Cart, User }) => ({
    language: Language.language,
    currency: Currency.currency,
    cartList: Cart.list,
    cartLoading: Cart.loading,
    cartQuantityLoading: Cart.quantityLoading,
    cartUserTotalPrice: Cart.totalPrice,
    user: User.userData
  }));

  const totalPrice = items.reduce((acc, item) => acc + calcPriceForCart(item, currency), 0);
  if (cartLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.root} data-cy='filled-cart'>
      <div className={styles.orderWrapper}>
        <div className={styles.orderTable}>
          <OrderTable
            calcPrice={calcPriceForCart}
            currency={currency}
            items={items}
            language={language}
            user={user}
            cartLoading={cartLoading}
            cartQuantityLoading={cartQuantityLoading}
          />
        </div>
        <>
          <DeliveryType
            language={language}
            totalPrice={cartLoading ? cartUserTotalPrice[currency].value : totalPrice}
            currency={currency}
          />
        </>
      </div>
      <SimilarProducts cartList={cartList} />
    </div>
  );
};

export default FilledCart;
