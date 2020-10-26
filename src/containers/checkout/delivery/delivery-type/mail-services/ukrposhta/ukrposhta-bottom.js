import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from '../../../../checkout.styles';
import { CHECKOUT_TITLES } from '../../../../../../translations/checkout.translations';

const UkrPoshtaBottom = () => {
  const style = useStyles();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  return (
    <div className={style.contactField}>
      <FormControl variant='outlined' className={style.dataInput}>
        <InputLabel>{CHECKOUT_TITLES[language].region}</InputLabel>
        <Select value='' label='region'>
          {[].map((region) => (
            <MenuItem key='region' value='region'>
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant='outlined' className={style.dataInput}>
        <InputLabel>Department</InputLabel>
        <Select value='' label='department'>
          {[].map((department) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export { UkrPoshtaBottom };
