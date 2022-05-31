import React from 'react';
import NovaPost from './nova-post';
import { deliveryTypes, countryOptions, isCourier } from '../../../../configs';
import UkrpostAndCourier from './ukrpost-and-courier';
import DeliveryType from '../delivery-type';
import Worldwide from './worldwide';
import TabPanel from '../../../../components/tab-panel';

const Delivery = ({
  language,
  deliveryType,
  values,
  errors,
  touched,
  handleChange,
  setFieldValue,
  setDeliveryType,
  countryOption
}) => (
  <>
    <TabPanel value={countryOption} index={countryOptions.WITHIN_UKRAINE}>
      <DeliveryType
        errors={errors}
        touched={touched}
        setFieldValue={setFieldValue}
        deliveryType={deliveryType}
        setDeliveryType={setDeliveryType}
      />
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
    </TabPanel>
    <TabPanel value={countryOption} index={countryOptions.WORLDWIDE}>
      <Worldwide
        errors={errors}
        touched={touched}
        values={values}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
      />
    </TabPanel>
  </>
);
export default Delivery;
