import React from 'react';
import { useStyles } from './auth-form-heading.styles';

const AuthHeading = (props) => {
  const styles = useStyles();
  return <h4 className={styles.heading}>{props.children}</h4>;
};
export default AuthHeading;
