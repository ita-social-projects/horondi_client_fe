import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useSelector } from 'react-redux';
import { useStyles } from './slider-home-page.style';
import { getImage } from '../../../utils/imageLoad';
import { Backdrop } from '@material-ui/core';
import LoadingBar from '../../../components/loading-bar';

const SliderHomePage = () => {
  const styles = useStyles();
  const { models, loading } = useSelector(({ Model }) => ({
    models: Model.models,
    loading: Model.loading
  }));
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
        {models.map((photo) => (
          <div
            key={photo.name[1].value}
            data-src={getImage(photo.images.large)}
          />
        ))}
      </AwesomeSlider>
    </div>
  ) : null;
};

export default SliderHomePage;
