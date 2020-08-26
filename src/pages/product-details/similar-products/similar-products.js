import React from 'react';
import { useSelector } from 'react-redux';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import { SIMILAR_ITEMS } from '../../../translations/product-details.translations';
import { IMG_URL, responsive } from '../../../configs';

import SimilarProductItem from './similar-product-item';

const SimilarProducts = () => {
  const { language, similarProducts, productId } = useSelector(
    ({ Language, Products: { products, product } }) => ({
      language: Language.language,
      similarProducts: products,
      productId: product._id
    })
  );
  const { title } = SIMILAR_ITEMS[language];

  const imagesList = similarProducts
    .filter(({ _id }) => _id !== productId)
    .map(({ _id, images }) => (
      <SimilarProductItem
        key={_id}
        imageUrl={`${IMG_URL}${images.primary.large}`}
        id={_id}
      />
    ));

  return (
    <div className='similarItems'>
      <div>
        <hr />
        <h2>{title}</h2>
        <hr />
      </div>
      <Carousel className='carousel' responsive={responsive} swipeable={false}>
        {imagesList}
      </Carousel>
      <hr />
    </div>
  );
};

export default SimilarProducts;
