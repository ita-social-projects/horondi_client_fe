import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useStyles } from './products-carousel.style';

const ProductsCorousel = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <AwesomeSlider className={styles.slider} mobileTouch>
        <div
          data-src='https://caferati.me/images/series/ricknmorty-3.png'
          className={styles.captionBlock}
        >
          <p className={styles.caption}>I want to see what you got.</p>
        </div>
        <div
          data-src='https://caferati.me/images/series/ricknmorty-2.jpg'
          className={styles.captionBlock}
        >
          <p className={styles.caption}>
            The answer is -- Dont think about it.
          </p>
        </div>
        <div
          data-src='https://caferati.me/images/series/ricknmorty-1.jpg'
          className={styles.captionBlock}
        >
          <p className={styles.caption}>
            Sometimes science is more art than science.
          </p>
        </div>
        <div
          data-src='https://caferati.me/images/series/ricknmorty-4.jpg'
          className={styles.captionBlock}
        >
          <p className={styles.caption}>Love, connection, experience.</p>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default ProductsCorousel;
