import React from 'react';
import { useSelector } from 'react-redux';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import * as productImage from '../../../images/pdp_main.jpg';

import {
  SIMILAR_ITEMS,
  IMG_ALT_INFO
} from '../../../translations/product-details.translations';
import { responsive } from '../../../configs';

const SimilarProducts = () => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  const { title } = SIMILAR_ITEMS[language];

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
