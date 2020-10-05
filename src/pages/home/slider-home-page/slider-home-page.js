import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useSelector } from 'react-redux';
import { sliderHome } from './slider-home-page.style';
import { getImage } from '../../../utils/imageLoad';
import { Backdrop } from '@material-ui/core';
import LoadingBar from '../../../components/loading-bar';

const SliderHomePage = () => {
  const styles = sliderHome();
  const { models, loading } = useSelector(({ Model: { models, loading } }) => ({
    models,
    loading
  }));

  if (loading) {
    return (
      <Backdrop className={styles.backdrop} open={loading} invisible>
        <LoadingBar color='inherit' />
      </Backdrop>
    );
  }

  function IsSlider(props) {
    const models = props.models;

    return models.length > 0 ? (
      <AwesomeSlider className={styles.slider} mobileTouch>
        {models.map((photo) => (
          <div
            key={photo.name[1].value}
            data-src={getImage(photo.images.large)}
          />
        ))}
      </AwesomeSlider>
    ) : null;
  }

  return (
    <div className={styles.captionBlock}>
      <IsSlider models={models} />
    </div>
  );
};

export default SliderHomePage;
