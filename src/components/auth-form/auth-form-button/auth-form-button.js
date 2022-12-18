import React from 'react';
import { Button } from '@material-ui/core';
import { Loader } from '../../loader/loader';
import { useStyles } from './auth-form-button.styles';

const AuthFormButton = ({
  onclick,
  disabled = false,
  children,
  loading,
  className,
  loaderHeight,
  ...props
}) => {
  const styles = useStyles();
  const loaderSize = loaderHeight || '50px';
  const loaderGrid = '1/-1';

  if (loading)
    return (
      <Loader
        height={loaderSize}
        width={loaderSize}
        heightWrap={loaderSize}
        gridColumn={loaderGrid}
      />
    );

  return (
    <Button
      className={`${styles.authBtn} ${className}`}
      fullWidth
      type='submit'
      disabled={disabled}
      onClick={onclick}
      {...props}
    >
      {children}
    </Button>
  );
};
export default AuthFormButton;
