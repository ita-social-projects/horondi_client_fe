import React from 'react';
import { useSelector } from 'react-redux';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import useStyles from './similar-products.styles';

import { SIMILAR_ITEMS } from '../../../translations/product-details.translations';
import { IMG_URL, responsive } from '../../../configs';

import SimilarProductItem from './similar-products-item';

const SimilarProducts = ({ currencySign }) => {
  const styles = useStyles();
  const { language, similarProducts, productId, currency } = useSelector(
    ({ Language, Currency, Products: { products, product } }) => ({
      language: Language.language,
      similarProducts: products,
      productId: product._id,
      currency: Currency.currency
    })
  );
  const { title } = SIMILAR_ITEMS[language];

  const imagesList = similarProducts
    .filter(({ _id }) => _id !== productId)
    .map(({ _id, images, rate, name, basePrice }) => (
      <SimilarProductItem
        currencySign={currencySign}
        key={_id}
        price={basePrice[currency].value}
        name={name}
        rate={rate}
        imageUrl={`${IMG_URL}${images.primary.large}`}
        id={_id}
      />
    ));

  return (
    <div>
      {imagesList.length ? (
        <div className={styles.similarItems}>
          <div>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <Carousel
            className={styles.carousel}
            responsive={responsive}
            swipeable={false}
          >
            {imagesList}
          </Carousel>
        </div>
      ) : null}
    </div>
  );
};

export default SimilarProducts;
