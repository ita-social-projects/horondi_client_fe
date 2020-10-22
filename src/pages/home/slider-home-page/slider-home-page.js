import React, { useMemo, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useSelector } from 'react-redux';
import { Backdrop } from '@material-ui/core';
import { useStyles } from './slider-home-page.style';
import { getImage } from '../../../utils/imageLoad';
import LoadingBar from '../../../components/loading-bar';

const SliderHomePage = () => {
  const [images, setImages] = useState([]);

  const styles = useStyles();
  const { models, loading } = useSelector(({ Model }) => ({
    models: Model.models,
    loading: Model.loading
  }));

  useMemo(() => {
    models.forEach((item) => {
      getImage(item.images.large).then(
        (src) => setImages([...images, src]),
        (badSrc) => setImages([...images, badSrc])
      );
    });
  }, [models]);

  if (loading) {
    return (
      <Backdrop className={styles.backdrop} open={loading} invisible>
        <LoadingBar color='inherit' />
      </Backdrop>
    );
  }

  return models.length > 0 ? (
    <div className={styles.captionBlock}>
      <AwesomeSlider className={styles.slider} mobileTouch>
        {models.map((photo, index) => (
          <div key={photo.name[1].value} data-src={images[index]} />
        ))}
      </AwesomeSlider>
    </div>
  ) : null;
};

export default SliderHomePage;
