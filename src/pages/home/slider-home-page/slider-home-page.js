import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useSelector } from 'react-redux';
import { sliderHome } from './slider-home-page.style';
import { getImage } from '../../../utils/imageLoad';

const SliderHomePage = () => {
  const styles = sliderHome();
  const { models } = useSelector(({ Model: { models, loading } }) => ({
    models
  }));
  return (
    <div className={styles.container}>
      <AwesomeSlider className={styles.slider} mobileTouch>
        {models.map((photo) => (
          <div
            key={photo.name[1].value}
            data-src={getImage(photo.images.large)}
          />
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default SliderHomePage;
