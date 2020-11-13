import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from '../../../checkout.styles';
import {
  CHECKOUT_DELIVERY_TYPES,
  CHECKOUT_TITLES
} from '../../../../../translations/checkout.translations';
import { getNovaPoshtaPrices } from '../../../../../redux/checkout/checkout.actions';

const DeliveryInfo = ({
  cityForNovaPoshtaBottom,
  from,
  setTotalPrice,
  isRenderPrice
}) => {
  const style = useStyles();
  const dispatch = useDispatch();
  const { language, cart, price } = useSelector(
    ({ Language, Cart, Checkout }) => ({
      language: Language.language,
      cart: Cart.list,
      price: Checkout.price
    })
  );
  const productsPrice = cart
    .map((product) => product.totalPrice * product.quantity)
    .reduce((prevPrice, currentPrice) => prevPrice + currentPrice);
  const productsWeight = cart
    .map((product) => product.dimensions.weightInKg)
    .reduce((prevWeight, currentWeight) => prevWeight + currentWeight);

  const priceData = useMemo(
    () => ({
      cityRecipient: cityForNovaPoshtaBottom && cityForNovaPoshtaBottom.ref,
      weight: productsWeight,
      cost: productsPrice,
      serviceType:
        from === CHECKOUT_DELIVERY_TYPES[language].novaPoshta
          ? 'WarehouseWarehouse'
          : 'WarehouseDoors'
    }),
    [productsWeight, productsPrice, cityForNovaPoshtaBottom, from, language]
  );

  useEffect(() => {
    from === CHECKOUT_DELIVERY_TYPES[language].selfPickUP
      ? setTotalPrice(productsPrice)
      : setTotalPrice(productsPrice + price.cost);
  }, [productsPrice, price, setTotalPrice, from, language]);

  const priceSwitcher = () => {
    switch (from) {
      case CHECKOUT_DELIVERY_TYPES[language].novaPoshta:
        return (
          isRenderPrice && (
            <>
              <span className={style.deliveryPrice}>
                {CHECKOUT_TITLES[language].deliveryPrice}: {price && price.cost}{' '}
                {CHECKOUT_TITLES[language].UAH}
              </span>
              <span className={style.totalPrice}>
                {CHECKOUT_TITLES[language].totalPrice}:{' '}
                {price && productsPrice + price.cost}{' '}
                {CHECKOUT_TITLES[language].UAH}
              </span>
            </>
          )
        );
      case CHECKOUT_DELIVERY_TYPES[language].courierNovaPoshta:
        return (
          isRenderPrice && (
            <>
              <span className={style.deliveryPrice}>
                {CHECKOUT_TITLES[language].deliveryPrice}: {price.cost}
                {CHECKOUT_TITLES[language].UAH}
              </span>
              <span className={style.totalPrice}>
                {CHECKOUT_TITLES[language].totalPrice}:{' '}
                {productsPrice + price.cost}
                {CHECKOUT_TITLES[language].UAH}
              </span>
            </>
          )
        );
      default:
        return '';
    }
  };

  useEffect(() => {
    cityForNovaPoshtaBottom && dispatch(getNovaPoshtaPrices(priceData));
  }, [dispatch, priceData, cityForNovaPoshtaBottom]);

  return <div className={style.deliveryInfoWrapper}>{priceSwitcher()}</div>;
};

export default DeliveryInfo;
