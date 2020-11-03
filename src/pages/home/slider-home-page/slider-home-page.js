import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { Backdrop } from '@material-ui/core';
import { useStyles } from './slider-home-page.style';
// import { getImage } from '../../../utils/imageLoad';
import LoadingBar from '../../../components/loading-bar';
import { getHomePageSliderImages } from '../../../redux/homepage-slider/homepage-slider.actions';

const SliderHomePage = () => {
  const styles = useStyles();
  const { images, loading } = useSelector(({ HomePageSlider }) => ({
    images: HomePageSlider.images,
    loading: HomePageSlider.loading
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePageSliderImages());
  }, [dispatch]);

  if (loading) {
    return (
      <Backdrop className={styles.backdrop} open={loading} invisible>
        <LoadingBar color='inherit' />
      </Backdrop>
    );
  }

  return (
    <div className={styles.captionBlock}>
      <AwesomeSlider
        className={styles.slider}
        mobileTouch
        fillParent='true'
        infinite='true'
        buttons='false'
        organicArrows='false'
      >
        {images.items.map((item) => (
          <div key={item._id}>{item.images.large}</div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default SliderHomePage;
