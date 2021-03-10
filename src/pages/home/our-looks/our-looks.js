import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useStyles } from './our-looks.style';
import { IMG_URL } from '../../../configs';
import { getAllHomeImageLooks } from '../../../redux/home-page-looks/home-page-looks.actions';

const OurLooks = () => {
  const looksImages = useSelector(({ HomePageImages }) => HomePageImages.imageList);
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHomeImageLooks());
  }, [dispatch]);

  return (
    <div className={styles.horondiStyle} data-section-style='light' id='horondiStyle'>
      <div className={styles.imageSection}>
        {looksImages.length
          ? looksImages.slice(0, 7).map((image) => (
            <div key={image._id} className={styles.imageWrapper}>
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
