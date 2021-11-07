import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import { useStyles } from './courier.styles';
import { CY_CODE_ERR } from '../../../../../configs';
import { courierInputLabels } from '../../../../../utils/checkout';
import { TEXT_FIELD_SIZE, TEXT_FIELD_VARIANT } from '../../../../../const/material-ui';

const Courier = ({ isLightTheme, language, values, handleChange, touched, errors }) => {
  const styles = useStyles({ isLightTheme });
  const { t } = useTranslation();

  return (
    <div className={styles.courierContainer}>
      <h3 className={styles.courierTitle}>{t('delivery.deliveryAddress')}</h3>
      <div className={styles.inputWrapper}>
        {courierInputLabels(language).map((field) => (
          <div key={field.name}>
            <TextField
              size={TEXT_FIELD_SIZE.SMALL}
              id='standard-start-adornment'
              data-cy={field.name}
              name={field.name}
              className={styles.textField}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              label={field.label}
              value={values[field.name]}
              onChange={handleChange}
              error={touched[field.name] && !!errors[field.name]}
            />
            {touched[field.name] && errors[field.name] && (
              <div className={styles.error} data-cy={CY_CODE_ERR}>
                {errors[field.name]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courier;
