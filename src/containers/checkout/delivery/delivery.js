import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './delivery.styles';
import { CHECKOUT_TITLES } from '../../../translations/checkout.translations';
import DeliveryType from './delivery-type/delivery-type';

export const Delivery = ({
  handleDeliveryTypeValidator,
  deliveryTypeValidator,
  shouldValidate
}) => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  const style = useStyles({ deliveryTypeValidator, shouldValidate });
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
            handleDeliveryTypeValidator={handleDeliveryTypeValidator}
            shouldValidate={shouldValidate}
          />
        </div>
      </div>
    </div>
  );
};
