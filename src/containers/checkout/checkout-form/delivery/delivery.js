import React from 'react';

import SelfPickup from './self-pickup';
import { deliveryTypes } from '../../../../configs';
import NovaPost from './nova-post';
import Courier from './courier';
import UkrPost from './ukrpost';

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
    {(deliveryType === deliveryTypes.COURIER ||
      deliveryType === deliveryTypes.UKRPOSTCOURIER ||
      deliveryType === deliveryTypes.NOVAPOSTCOURIER) && (
      <Courier
        language={language}
        deliveryType={deliveryType}
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
      />
    )}
    {deliveryType === deliveryTypes.UKRPOST && (
      <UkrPost
        language={language}
        deliveryType={deliveryType}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
        values={values}
      />
    )}
  </>
);
export default Delivery;
