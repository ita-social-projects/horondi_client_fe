import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './materials.style';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Materials = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch]);

  const titleText = language
    ? 'This page has not been developed yet'
    : 'Ця сторінка ще не розроблена';

  return (
    <div className={styles.root}>
      <Typography variant='h4' className={styles.title}>
        {titleText}
      </Typography>
    </div>
  );
};

export default Materials;
