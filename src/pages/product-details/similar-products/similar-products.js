import React from 'react';
import { useSelector } from 'react-redux';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useStyles } from './similar-products.styles';

import { SIMILAR_ITEMS } from '../../../translations/product-details.translations';
import { RESPONSIVE_PDP } from '../../../configs';
import SimilarProductsItem from './similar-products-item';

const SimilarProducts = ({ currencySign }) => {
  const styles = useStyles();
  const { language, similarProducts, productId, currency } = useSelector(
    ({ Language, Currency, Products: { products, product } }) => ({
      language: Language.language,
      similarProducts: products,
      // productId: product._id,
      currency: Currency.currency
    })
  );
  // const { title } = SIMILAR_ITEMS[language];

  // const imagesList = similarProducts
  //   .filter(({ _id }) => _id !== productId)
  //   .map(({ _id, images, rate, name, basePrice }) => (
  //     <SimilarProductsItem
  //       currencySign={currencySign}
  //       key={_id}
  //       price={basePrice[currency].value}
  //       name={name}
  //       rate={rate}
  //       imageUrl={images.primary.medium}
  //       id={_id}
  //     />
  //   ));

  return (
    <div id='similar-products'>
      {/* {imagesList.length ? (
        <div className={styles.similarItems}>
          <div>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <Carousel
            className={styles.carousel}
            responsive={RESPONSIVE_PDP}
            swipeable={false}
          >
            {imagesList}
          </Carousel>
        </div>
      ) : null} */}
      similar products
    </div>
  );
};

export default SimilarProducts;
