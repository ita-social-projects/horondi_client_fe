import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './delivery.styles';
import { CHECKOUT_TITLES } from '../../../translations/checkout.translations';
import DeliveryType from './delivery-type/delivery-type';

export const Delivery = ({
  handleDeliveryTypeValidator,
  deliveryTypeValidator,
  shouldValidate,
  userData,
  allFieldsValidated,
  openModal,
  setOpenModal
}) => {
  const { language, isLightTheme } = useSelector(({ Language, Theme }) => ({
    language: Language.language,
    isLightTheme: Theme.lightMode
  }));
  const style = useStyles({
    deliveryTypeValidator,
    shouldValidate,
    isLightTheme
  });
  const [deliveryType, setDeliveryType] = useState('');

  return (
    <div className={style.deliveryType}>
      <div className={deliveryType && style.deliveryTypeSelected}>
        <div className={style.contactsFields}>
          <div className={style.subTitle}>
            <span>{CHECKOUT_TITLES[language].delivery}</span>
          </div>
          <DeliveryType
            deliveryType={deliveryType}
            setDeliveryType={setDeliveryType}
            handleDeliveryTypeValidator={handleDeliveryTypeValidator}
            shouldValidate={shouldValidate}
            userData={userData}
            allFieldsValidated={allFieldsValidated}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>
      </div>
    </div>
  );
};
