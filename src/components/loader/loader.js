import React from 'react';
import { useStyles } from './loader.styles';

export const Loader = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <div className={styles.ldsDualRing} />
    </div>
  );
};
