import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import { calcPriceForCart } from '../../../../utils/priceCalculating';
import SimilarProducts from '../../../../pages/product-details/similar-products';
import { Loader } from '../../../../components/loader/loader';
import PathBack from '../path-back/path-back';

const FilledCart = ({ items }) => {
  const styles = useStyles();
  const { language, currency, cartList, cartLoading, cartQuantityLoading, user } = useSelector(
    ({ Language, Currency, Cart, User }) => ({
      language: Language.language,
      currency: Currency.currency,
      cartList: Cart.list,
      cartLoading: Cart.loading,
      cartQuantityLoading: Cart.quantityLoading,
      cartUserTotalPrice: Cart.totalPrice,
      user: User.userData
    })
  );
  console.log(items);
  useEffect(() => {
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items.length; j++) {
        if (
          items[i].product._id === items[j].product._id &&
          items[i].options.size._id === items[j].options.size._id &&
          i !== j
        ) {
          console.log('woooooorkrkkkkkk');
        }
      }
    }
  }, [items]);
  if (cartLoading) {
    return <Loader />;
  }
  return (
    <>
      <PathBack />
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
        </div>
        <SimilarProducts cartList={cartList} />
      </div>
    </>
  );
};

export default FilledCart;
