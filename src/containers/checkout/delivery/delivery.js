import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CHECKOUT_TITLES } from '../../../translations/checkout.translations';
import { useStyles } from '../checkout.styles';
import DeliveryType from './delivery-type/delivery-type';

export const Delivery = () => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  const style = useStyles();
  const [deliveryType, setDeliveryType] = useState('');

  return (
    <div className={style.deliveryType}>
      <div className={deliveryType && style.deliveryTypeSelected}>
        <div className={style.contactsFields}>
          <span className={style.subTitle}>
            {CHECKOUT_TITLES[language].delivery}
          </span>
          <DeliveryType
            deliveryType={deliveryType}
            setDeliveryType={setDeliveryType}
          />
        </div>
      </div>
    </div>
  );
};
