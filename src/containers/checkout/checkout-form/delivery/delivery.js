import React from 'react';

import SelfPickup from './self-pickup';
import { deliveryTypes } from '../../../../configs';
import NovaPost from './nova-post';

const Delivery = ({
  isLightTheme,
  language,
  deliveryType,
  values,
  errors,
  touched,
  handleChange
}) => (
  <>
    {deliveryType === deliveryTypes.SELFPICKUP && (
      <SelfPickup language={language} isLightTheme={isLightTheme} />
    )}
    {deliveryType === deliveryTypes.NOVAPOST && (
      <NovaPost
        language={language}
        isLightTheme={isLightTheme}
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
      />
    )}
  </>
);
export default Delivery;
