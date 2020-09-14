import React from 'react';
import { useStyles } from './loader.styles';

export const Loader = (props) => {
  const styles = useStyles(props);

  return (
    <div className={styles.wrapper}>
      <div className={styles.ldsDualRing} {...props}/>
    </div>
  );
};
