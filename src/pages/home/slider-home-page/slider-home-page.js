import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useStore } from 'react-redux';
import { useStyles } from './slider-home-page.style';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { carouselInterval } from '../../../configs';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderHomePage = () => {
  const store = useStore();
  const styles = useStyles();

  function getImages(state) {
    return state.Categories;
  }
  let curentValue = getImages(store.getState());
  let images = [];
  for (let i = 0; i < curentValue.list.length; i++) {
    if (curentValue.list[i].isMain) {
      images.push(curentValue.list[i].images.large);
    }
  }

  return (
    <div className={styles.captionBlock}>
      <AutoplaySlider
        play={true}
        interval={carouselInterval}
        className={styles.slider}
      >
        {images.map((image, index) => (
          <div key={index} data-src={image} />
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default SliderHomePage;
