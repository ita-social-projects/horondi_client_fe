import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import link from 'react-awesome-slider/src/hoc/navigation/link';
import { useStyles } from './our-looks.style';
import { IMG_URL } from '../../../configs';
import { getAllHomeImageLooks } from '../../../redux/home-page-looks/home-page-looks.actions';
import { Loader } from '../../../components/loader/loader';

const OurLooks = () => {
  const { looksImages, loading } = useSelector(
    ({ HomePageImages }) => ({
      looksImages: HomePageImages.imageList,
      loading: HomePageImages.homeImagesLoading
    })
  );
  const styles = useStyles();
  const dispatch = useDispatch();

  const [isPreviewed, setIsPreviewed] = useState(false)
  const [previewImage, setPreviewImage] = useState('')

  useEffect(() => {
    dispatch(getAllHomeImageLooks());
  }, [dispatch]);

  const handleImagePreviewOpen = (link) => {
    setIsPreviewed(true)
    setPreviewImage(link)
  }

  const handleImagePreviewClose = () => {
    setIsPreviewed(false)
    setPreviewImage('')
  }

  if (loading) {
    return (
      <div className={styles.center}>
        <Loader />
      </div>
    );
  }

  return (
    <div
      className={styles.horondiStyle}
      data-section-style='light'
      id='horondiStyle'
    >
      <div className={styles.imageSection}>
        {looksImages.length
          ? looksImages.slice(0, 7).map((image) => (
            <div
              onMouseDown={() => handleImagePreviewOpen(image.images.medium.large)}
              onMouseUp={handleImagePreviewClose}
              key={image.images.medium}
              className={styles.imageWrapper}>
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
      {isPreviewed && <div className={styles.preview}>
        <img src={previewImage} alt='horondi-style' />
      </div>}
    </div>
  );
};

export default OurLooks;
