import React from 'react';
import { Button } from '@material-ui/core';
import { Loader } from '../../loader/loader';
import { useStyles } from './auth-form-button.styles';

const AuthFormButton = ({ onclick, disabled = false, children, loading }) => {
  const styles = useStyles();
  const loaderSize = '42px';

  if (loading) return <Loader height={loaderSize} width={loaderSize} heightWrap={loaderSize} />;

  return (
    <Button
      className={styles.authBtn}
      fullWidth
      type='submit'
      disabled={disabled}
      onClick={onclick}
    >
      {children}
    </Button>
  );
};
export default AuthFormButton;
