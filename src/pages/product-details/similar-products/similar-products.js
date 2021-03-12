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
  const { language, similarProducts, currency, product, cartList } = useSelector(
    ({ Language, Currency, Products: { products, product }, Cart }) => ({
      language: Language.language,
      similarProducts: products,
      product,
      currency: Currency.currency,
      cartList: Cart.list
    })
  );

  const { title } = SIMILAR_ITEMS[language];

  let imagesList = [];
  if (cartList) {
    for (const simProduct of similarProducts) {
      for (const cartProduct of cartList) {
        if (
          simProduct.category._id !== cartProduct.categoryID &&
          (simProduct.mainMaterial.color._id === cartProduct.mainMaterialColorID ||
            simProduct.pattern._id === cartProduct.patternID)
        ) {
          imagesList = [...imagesList, simProduct];
        }
      }
    }
  } else {
    imagesList = similarProducts.filter(
      ({ category, mainMaterial, pattern }) =>
        category._id !== product.category._id &&
        (mainMaterial.color._id === product.mainMaterial.color._id ||
          pattern._id === product.pattern._id)
    );
  }

  // const imagesList = cartList
  //   ? similarProducts.filter(simProduct => {
  //       cartList.forEach(cartProduct => {
  //         return (simProduct.category._id !== cartProduct.categoryID &&
  //           (simProduct.mainMaterial.color._id === cartProduct.mainMaterialColorID
  //           || simProduct.pattern._id === cartProduct.patternID))
  //       });
  //     })
  //   : similarProducts.filter(
  //     ({ category, mainMaterial, pattern }) =>
  //       category._id !== product.category._id &&
  //       (mainMaterial.color._id === product.mainMaterial.color._id ||
  //         pattern._id === product.pattern._id)
  //     );

  imagesList = imagesList.map(({ _id, images, rate, name, basePrice }) => (
    <SimilarProductsItem
      currencySign={currencySign}
      key={_id}
      price={basePrice[currency].value}
      name={name}
      rate={rate}
      imageUrl={images.primary.medium}
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
            responsive={RESPONSIVE_PDP}
            swipeable={false}
            autoPlay
            autoPlaySpeed={5000}
            infinite
            transitionDuration={1000}
          >
            {imagesList}
          </Carousel>
        </div>
      ) : null}
    </div>
  );
};

export default SimilarProducts;
