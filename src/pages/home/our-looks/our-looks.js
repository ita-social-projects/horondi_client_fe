import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { useStyles } from './our-looks.style';
import { IMG_URL } from '../../../configs';
import { getAllHomeImageLooks } from '../operations/our-looks/our-looks.queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';

const OurLooks = () => {
  const styles = useStyles();
  const [looksImages, setLooksImages] = useState([]);

  const { error, loading } = useQuery(getAllHomeImageLooks, {
    onCompleted: (data) => setLooksImages(data.getHomePageLooksImages)
  });

  if (error || loading) return errorOrLoadingHandler(error, loading);

  return (
    <div className={styles.horondiStyle} data-section-style='light' id='horondiStyle'>
      <div className={styles.imageSection}>
        {looksImages.length
          ? looksImages.slice(0, 7).map((image) => (
            <div key={image._id} className={styles.imageWrapper} data-testid='ourLooksImage'>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url("${IMG_URL}${image.images.medium}")`
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
