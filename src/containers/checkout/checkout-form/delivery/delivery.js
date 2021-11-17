import React from 'react';

import SelfPickup from './self-pickup';
import { deliveryTypes, isCourier } from '../../../../configs';
import NovaPost from './nova-post';
import UkrpostAndCourier from './ukrpost-and-courier';

const Delivery = ({
  language,
  deliveryType,
  values,
  errors,
  touched,
  handleChange,
  setFieldValue
}) => (
  <>
    {deliveryType === deliveryTypes.SELFPICKUP && <SelfPickup />}

    {deliveryType === deliveryTypes.NOVAPOST && (
      <NovaPost
        setFieldValue={setFieldValue}
        language={language}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        values={values}
      />
    )}
    {(deliveryType === deliveryTypes.UKRPOST || isCourier(deliveryType)) && (
      <UkrpostAndCourier
        deliveryType={deliveryType}
        setFieldValue={setFieldValue}
        handleChange={handleChange}
        errors={errors}
        touched={touched}
        values={values}
        language={language}
      />
    )}
  </>
);
export default Delivery;
