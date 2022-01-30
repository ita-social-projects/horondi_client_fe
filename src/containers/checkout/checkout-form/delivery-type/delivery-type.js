import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Select } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from './delivery-type.styles';
import { deliveryTypes, CY_CODE_ERR, TEXT_FIELD_VARIANT } from '../../../../configs';
import { setDeliveryTypeToStorage } from '../../../../utils/checkout';

const DeliveryType = ({ setFieldValue, touched, errors, deliveryType, setDeliveryType }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const [deliveryTypeValue, setDeliveryTypeValue] = useState(deliveryType);
  const [courierOrganization, setcourierOrganization] = useState(deliveryTypes.NOVAPOSTCOURIER);

  const handleCourierOrganizationChange = (eventValue) => {
    setFieldValue('courierOrganization', eventValue);
    setcourierOrganization(eventValue);
  };

  useEffect(() => {
    const handleAddDeliveryType = () => {
      if (deliveryTypeValue === deliveryTypes.COURIER && courierOrganization) {
        setDeliveryType(courierOrganization);
      } else {
        setDeliveryType(deliveryTypeValue);
      }
      setDeliveryTypeToStorage(deliveryTypeValue);
    };
    handleAddDeliveryType();
  }, [deliveryTypeValue, courierOrganization, setDeliveryType]);

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
            data-testid='delivery-type'
            aria-label='Delivery type'
            name='delivery-type'
            value={deliveryTypeValue}
            onChange={(e) => setDeliveryTypeValue(e.target.value)}
          >
            {radioButtons}
          </RadioGroup>
        </FormControl>
        {deliveryTypeValue === deliveryTypes.COURIER && (
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
