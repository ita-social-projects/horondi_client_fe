import React from 'react';
import useStyles from './detail.styles';

const Detail = ({ subtitle, description }) => {
  const styles = useStyles();

  return (
    <div>
      <span className={styles.subtitle}>{subtitle}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default Detail;
