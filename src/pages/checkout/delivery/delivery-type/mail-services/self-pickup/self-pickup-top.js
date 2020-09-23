import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { CHECKOUT_DROP_LIST } from '../../../../../../translations/checkout.translations';
import { useStyles } from '../../../../checkout.styles';

const SelfPickupTop = ({
  departmentSelfPickUpStorage,
  departmentSelfPickUp,
  selectHandlerDepartmentSelfPickup
}) => {
  const style = useStyles();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  return (
    departmentSelfPickUpStorage.length > 1 && (
      <FormControl variant='outlined' className={style.dataInput}>
        <InputLabel>{CHECKOUT_DROP_LIST[language].department}</InputLabel>
        <Select
          value={departmentSelfPickUp}
          onChange={selectHandlerDepartmentSelfPickup}
          label='department'
        >
          {departmentSelfPickUpStorage.map((department) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  );
};

export { SelfPickupTop };
