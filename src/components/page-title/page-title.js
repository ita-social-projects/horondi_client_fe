import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './page-title.styles';

const PageTitle = ({ title, titleLine, ...props }) => {
  const styles = useStyles();

  return (
    <>
      <Typography variant='h1' className={styles.title} {...props}>
        {title}
      </Typography>
      {titleLine && <div className={styles.titleLine} />}
    </>
  );
};

export default PageTitle;
