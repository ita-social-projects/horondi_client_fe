import React from 'react';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import * as productImage from '../../../images/pdp_main.jpg';

import {
  SIMILAR_ITEMS,
  IMG_ALT_INFO
} from '../../../translations/product-details.translations';

const SimilarProducts = ({ language }) => {
  const { title } = SIMILAR_ITEMS[language];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1146, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 810, min: 0 },
      items: 1
    }
  };

  const imgs = Array(6)
    .fill(productImage)
    .map((img, idx) => (
      <img src={img} alt={IMG_ALT_INFO[language].value} key={idx} />
    ));

  return (
    <div className='similarItems'>
      <div>
        <hr />
        <h2>{title}</h2>
        <hr />
      </div>
      <Carousel className='carousel' responsive={responsive} swipeable={false}>
        {imgs}
      </Carousel>
      <hr />
    </div>
  );
};

export default SimilarProducts;
