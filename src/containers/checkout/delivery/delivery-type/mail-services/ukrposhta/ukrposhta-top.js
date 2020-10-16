import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../../../checkout.styles';

const UkrposhtaTop = () => {
  const style = useStyles();
  return (
    <Autocomplete
      options={[]}
      getOptionLabel={(option) => option}
      className={style.dataInput}
      renderInput={(params) => (
        <TextField {...params} label='City' variant='outlined' />
      )}
    />
  );
};

export { UkrposhtaTop };
