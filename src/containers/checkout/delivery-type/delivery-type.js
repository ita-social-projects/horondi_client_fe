import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Select } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from './delivery-type.styles';
import { addDeliveryType } from '../../../redux/cart/cart.actions';
import { deliveryTypes, SESSION_STORAGE, CY_CODE_ERR, TEXT_FIELD_VARIANT } from '../../../configs';
import { getFromSessionStorage } from '../../../services/session-storage.service';
import { setDeliveryTypeToStorage } from '../../../utils/checkout';

const DeliveryType = ({ setFieldValue, touched, errors }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [deliveryType, setDeliveryType] = useState(
    getFromSessionStorage(SESSION_STORAGE.DELIVERY_TYPE) || deliveryTypes.SELFPICKUP
  );
  const [courierOrganization, setcourierOrganization] = useState(deliveryTypes.NOVAPOSTCOURIER);

  const handleAddDeliveryType = () => {
    if (deliveryType === deliveryTypes.COURIER && courierOrganization) {
      dispatch(addDeliveryType(courierOrganization));
    } else {
      dispatch(addDeliveryType(deliveryType));
    }
    setDeliveryTypeToStorage(deliveryType);
  };

  const handleCourierOrganizationChange = (eventValue) => {
    setFieldValue('courierOrganization', eventValue);
    setcourierOrganization(eventValue);
  };

  useEffect(() => {
    handleAddDeliveryType();
  }, [deliveryType, courierOrganization]);

  const getDeliveryType = t('checkout.deliveryType', { returnObjects: true });
  const getCourierOrganization = t('checkout.courierOrganization', { returnObjects: true });
  const radioButtons = Object.entries(getDeliveryType).map((type) => (
    <FormControlLabel
      value={type[0].toUpperCase()}
      control={<Radio color='default' size='small' />}
      label={type[1]}
      key={type[0]}
      classes={{ label: styles.radioBtn }}
    />
  ));

  return (
    <div className={styles.root}>
      <div className={styles.deliveryTypeContainer}>
        <h3 className={styles.deliveryTitle}>{t('checkout.checkoutTitles.delivery')}</h3>
        <FormControl component='fieldset' classes={{ root: styles.radioBtnWrapper }}>
          <RadioGroup
            aria-label='Delivery type'
            name='delivery-type'
            value={deliveryType}
            onChange={(e) => setDeliveryType(e.target.value)}
          >
            {radioButtons}
          </RadioGroup>
        </FormControl>
        {deliveryType === deliveryTypes.COURIER && (
          <div className={styles.inputWrapper}>
            <FormControl
              error={touched.courierOrganization && !!errors.courierOrganization}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              className={styles.formControl}
            >
              <InputLabel variant={TEXT_FIELD_VARIANT.OUTLINED}>
                {t('checkout.checkoutTextFields.courier')}
              </InputLabel>
              <Select
                label={t('checkout.checkoutTextFields.courier')}
                className={styles.courierSelect}
                data-cy='courierOrganization'
                name='courierOrganization'
                value={courierOrganization}
                onChange={(e) => handleCourierOrganizationChange(e.target.value)}
              >
                {Object.entries(getCourierOrganization).map((value) => (
                  <MenuItem key={value} value={value[0].toUpperCase()}>
                    {value[1]}
                  </MenuItem>
                ))}
              </Select>
              {touched.courierOrganization && errors.courierOrganization && (
                <div data-cy={CY_CODE_ERR} className={styles.error}>
                  {t(errors.courierOrganization)}
                </div>
              )}
            </FormControl>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryType;
