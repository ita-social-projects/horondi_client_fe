import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../../../checkout.styles';

const UkrPoshtaFirstStep = () => {
  const style = useStyles();
  return (
    <Autocomplete
      options={[]}
      getOptionLabel={(option) => option}
      className={style.dataInput}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(event) => console.log('I AM UKRPOSHTA')}
          label='City'
          variant='outlined'
        />
      )}
    />
  );
};

export { UkrPoshtaFirstStep };
