import React from 'react';

import SelfPickup from './self-pickup';
import { deliveryTypes } from '../../../../configs';
import NovaPost from './nova-post';
import Courier from './courier';
import UkrPost from './ukrpost';

const Delivery = ({
  isLightTheme,
  language,
  deliveryType,
  values,
  errors,
  touched,
  handleChange,
  setFieldValue
}) => (
  <>
    {deliveryType === deliveryTypes.SELFPICKUP && (
      <SelfPickup language={language} isLightTheme={isLightTheme} />
    )}

    {deliveryType === deliveryTypes.NOVAPOST && (
      <NovaPost
        setFieldValue={setFieldValue}
        language={language}
        isLightTheme={isLightTheme}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        values={values}
      />
    )}
    {(deliveryType === deliveryTypes.NOVAPOSTCOURIER ||
      deliveryType === deliveryTypes.UKRPOSTCOURIER) && (
      <Courier
        language={language}
        isLightTheme={isLightTheme}
        deliveryType={deliveryType}
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
      />
    )}
    {deliveryType === deliveryTypes.UKRPOST && (
      <UkrPost
        language={language}
        isLightTheme={isLightTheme}
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
