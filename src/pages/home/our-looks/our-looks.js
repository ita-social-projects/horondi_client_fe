import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './our-looks.style';
import { HOMEPAGE_LOOKS_IMAGES } from '../../../configs';
import { HOMEPAGE_TITLES } from '../../../translations/homepage.translations';

const OurLooks = () => {
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  return (
    <div>
      <Typography variant='h2' className={styles.title}>
        {HOMEPAGE_TITLES[language].look}
      </Typography>
      <div className={styles.imageSection}>
        {HOMEPAGE_LOOKS_IMAGES.map((imageSrc, i) => (
          <div key={i} className={styles.imageWrapper}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${imageSrc})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLooks;
