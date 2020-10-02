import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from '../../../checkout.styles';
import { CHECKOUT_TITLES } from '../../../../../translations/checkout.translations';

const DeliveryInfo = () => {
  const style = useStyles();
  const { language, cart } = useSelector(({ Language, Cart }) => ({
    language: Language.language,
    cart: Cart.list
  }));
  const productsPrice = cart
    .map((product) => product.totalPrice * product.quantity)
    .reduce((prevPrice, currentPrice) => prevPrice + currentPrice);
  const productsWeight = cart
    .map((product) => product.dimensions.weightInKg)
    .reduce((prevWeight, currentWeight) => prevWeight + currentWeight);

  const priceData = {
    cityRecipient: '',
    weight: productsWeight,
    cost: productsPrice,
    seatsAmount: 1,
    serviceType: 'WarehouseWarehouse'
  };

  return (
    <div className={style.deliveryInfoWrapper}>
      <span className={style.totalPrice}>
        {CHECKOUT_TITLES[language].totalPrice}: {productsPrice} UAH
      </span>
    </div>
  );
};

export default DeliveryInfo;
