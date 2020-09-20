import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../../../checkout.styles';

const UkrPoshtaSecondStep = () => {
  const style = useStyles();

  return (
    <div className={style.contactField}>
      <FormControl variant='outlined' className={style.dataInput}>
        <InputLabel>Region</InputLabel>
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
        <Select
          value={[]}
          onChange={() => {
            console.log('UKRPOSTA!');
          }}
          label='department'
        >
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

export { UkrPoshtaSecondStep };
