import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CHECKOUT_DROP_LIST } from '../../../../../../translations/checkout.translations';
import { useStyles } from '../../../../checkout.styles';

const NovaPoshtaSecondStep = () => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  const style = useStyles();

  const [department, setDepartment] = useState('');
  const selectHandlerDepartment = (event) => {
    setDepartment(event.target.value);
  };
  const departments = [];

  return (
    <div className={style.contactField}>
      <FormControl variant='outlined' className={style.dataInput}>
        <InputLabel>{CHECKOUT_DROP_LIST[language].department}</InputLabel>
        <Select
          value={department}
          onChange={selectHandlerDepartment}
          label='department'
        >
          {departments.map((department) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export { NovaPoshtaSecondStep };
