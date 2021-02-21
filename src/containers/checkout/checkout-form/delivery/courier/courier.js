import React from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from './courier.styles';
import { CHECKOUT_DELIVERY_TYPES, CHECKOUT_TEXT_FIELDS, CHECKOUT_TITLES } from '../../../../../translations/checkout.translations';
import { deliveryTypes } from '../../../../../configs';
import { courierInputLabels } from '../../../../../utils/checkout';

const Courier = ({ isLightTheme, language, deliveryType, values, handleChange, touched, errors }) => {
  const styles = useStyles({ isLightTheme });
  console.log(values);
  return (
    <div className={styles.courierContainer}>
      <h3 className={styles.courierTitle}>
        {deliveryType === deliveryTypes.NOVAPOSTCOURIER ? CHECKOUT_DELIVERY_TYPES[language].courierNovaPoshta : CHECKOUT_DELIVERY_TYPES[language].courierUkrPoshta}
      </h3>
      <div className={styles.inputData}>
        <h4 className={styles.courierInputDataTitle}>{CHECKOUT_TITLES[language].deliveryAddress}</h4>
        <div className={styles.inputWrapper}>
          {courierInputLabels(language).map((field) => (
            <>
              <TextField
                size='small'
                id='standard-start-adornment'
                data-cy={field.name}
                name={field.name}
                className={styles.textField}
                variant='outlined'
                label={field.label}
                value={values[field.name]}
                onChange={handleChange}
                error={touched[field.name] && !!errors[field.name]}
              />
              {touched[field.name] && errors[field.name] && (
                <div className={styles.error} data-cy='code-error'>
                  {errors[field.name]}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courier;
