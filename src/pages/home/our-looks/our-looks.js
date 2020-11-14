import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './our-looks.style';
import { IMG_URL } from '../../../configs';
import { getAllHomeImageLooks } from '../../../redux/home-page-looks/home-page-looks.actions';
import { HOMEPAGE_TITLES } from '../../../translations/homepage.translations';
import { Loader } from '../../../components/loader/loader';

const OurLooks = () => {
  const { language, looksImages, loading } = useSelector(
    ({ Language, HomePageImages }) => ({
      language: Language.language,
      looksImages: HomePageImages.imageList,
      loading: HomePageImages.homeImagesLoading
    })
  );
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHomeImageLooks());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={styles.center}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.horondiStyle}>
      <Typography variant='h2' className={styles.title}>
        {HOMEPAGE_TITLES[language].look}
      </Typography>
      <div className={styles.imageSection}>
        {looksImages.length
          ? looksImages.map((image) => (
              <div key={image.images.medium} className={styles.imageWrapper}>
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${IMG_URL}${image.images.medium})`
                  }}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default OurLooks;
