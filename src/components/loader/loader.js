import React from 'react';
import { useStyles } from './loader.styles';

export const Loader = (props) => {
  const styles = useStyles(props);

  return (
    <div className={styles.wrapper} data-testid='loader'>
      <div className={styles.ldsDualRing} />
    </div>
  );
};
