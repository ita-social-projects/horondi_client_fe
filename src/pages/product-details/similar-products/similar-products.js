import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import * as productImage from '../../../images/pdp_main.jpg';

import {
  SIMILAR_ITEMS,
  IMG_ALT_INFO
} from '../../../translations/product-details.translations';
import { responsive } from '../../../configs';

const SimilarProducts = ({ category, productId }) => {
  const { language, similarProducts } = useSelector(
    ({ Language, Products }) => ({
      language: Language.language,
      similarProducts: Products.products
    })
  );
  const { title } = SIMILAR_ITEMS[language];

  const imgs = similarProducts
    .filter(({ _id }) => _id !== productId)
    .map(({ _id }, idx) => (
      <Link key={idx} to={`/${category.name[1].value}/${_id}`}>
        <img
          className='image'
          src={productImage}
          alt={IMG_ALT_INFO[language].value}
          key={idx}
        />
      </Link>
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
