import React from 'react';
import { useStyles } from './auth-form-wrapper.styles';

const AuthFormWrapper = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.imgBackground}>
      <div className={styles.outerForm}>
        <div className={styles.innerForm}>
          <div className={styles.minimumWidth}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};
export default AuthFormWrapper;
