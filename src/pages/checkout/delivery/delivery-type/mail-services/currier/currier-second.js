import { TextField } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { CHECKOUT_TEXT_FIELDS } from '../../../../../../translations/checkout.translations';
import { useStyles } from '../../../../checkout.styles';

const CurrierSecondStep = () => {
  const style = useStyles();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  return (
    <div className={style.contactField}>
      <TextField
        required
        label={CHECKOUT_TEXT_FIELDS[language].street}
        variant='outlined'
        className={style.dataInputCurrier}
      />
      <TextField
        required
        label={CHECKOUT_TEXT_FIELDS[language].building}
        variant='outlined'
        className={style.dataInputCurrier}
      />
      <TextField
        required
        label={CHECKOUT_TEXT_FIELDS[language].apartment}
        variant='outlined'
        className={style.dataInputCurrier}
      />
    </div>
  );
};

export { CurrierSecondStep };
