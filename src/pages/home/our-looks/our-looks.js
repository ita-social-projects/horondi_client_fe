import React from 'react';

import { useStyles } from './our-looks.style';
import {
  LANGUAGE,
  HOMEPAGE_TITLES,
  HOMEPAGE_LOOKS_IMAGES
} from '../../../configs';

const OurLooks = () => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.title}>{HOMEPAGE_TITLES[LANGUAGE].look}</h2>
      <div className={classes.imageSection}>
        {HOMEPAGE_LOOKS_IMAGES.map((imageSrc, i) => (
          <div key={i} className={classes.imageWrapper}>
            {i < 4 ? (
              <img src={imageSrc} alt='Looks' />
            ) : (
              <img
                className={classes.secondFloorImg}
                src={imageSrc}
                alt='Looks'
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLooks;
