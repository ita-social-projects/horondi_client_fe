import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './materials.style';
import SliderHomePage from '../home/slider-home-page';
import CategoriesList from '../home/categories-list';
import OurLooks from '../home/our-looks';

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
      <div className={styles.home} data-cy='home-page'>
        <div className={styles.homeHeader}>
          <SliderHomePage />
        </div>
        <CategoriesList />
        <OurLooks />
      </div>
    </div>
  );
};

export default Materials;
