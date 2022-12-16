import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './page-title.styles';

const PageTitle = ({ title, titleLine, marginForCrumbs, ...props }) => {
  const styles = useStyles();
  const wraperStyles = `${marginForCrumbs && styles.marginForCrumbs} ${styles.wrapper}`;

  return (
    <div className={wraperStyles}>
      <Typography variant='h1' className={styles.title} {...props}>
        {title}
      </Typography>
      {titleLine && <div className={styles.titleLine} />}
    </div>
  );
};

export default PageTitle;
