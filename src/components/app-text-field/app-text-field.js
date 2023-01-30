import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import { useStyles } from './app-text-field.styles';

const AppTextField = ({ errorMsg, ...props }) => {
  const styles = useStyles();
  const helperText = errorMsg ? (
    <Tooltip title={errorMsg}>
      <Typography variant='caption'>{errorMsg}</Typography>
    </Tooltip>
  ) : (
    ' '
  );

  return (
    <TextField
      className={styles.input}
      FormHelperTextProps={{ classes: { root: styles.helperText } }}
      error={Boolean(errorMsg)}
      helperText={helperText}
      {...props}
    />
  );
};

export default AppTextField;
