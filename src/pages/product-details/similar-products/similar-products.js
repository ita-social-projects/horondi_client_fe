<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useContext, useState } from 'react';
>>>>>>> a69ba7ad (Refactoring/prices-catalog (#1895))
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import './similar-products.css';
import { useStyles } from './similar-products.styles';
import { RESPONSIVE_PDP } from '../constants';
import SimilarProductsItem from './similar-products-item';
import { getFullProducts, similarProductForCart } from '../../../utils/productDetails';
import { getFilteredProductsQuery } from '../../product-list-page/operations/product-list.queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';
import { useCurrency } from '../../../hooks/use-currency';

const SimilarProducts = ({ cartList, product }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const { getPriceWithCurrency, getCurrencySign } = useCurrency();
  const styles = useStyles();

  const { error, loading } = useQuery(getFilteredProductsQuery, {
    onCompleted: (data) => setSimilarProducts(data.getProducts.items)
  });

  const { t } = useTranslation();

  const currencySign = getCurrencySign();
  let imagesList;

  if (error || loading) return errorOrLoadingHandler(error, loading);

  if (cartList) {
    const fullCartProducts = getFullProducts(similarProducts, cartList);
    imagesList = similarProductForCart(similarProducts, fullCartProducts);
  } else {
    imagesList = similarProducts.filter(
      ({ category, mainMaterial, pattern }) =>
        (category?._id !== product.category?._id &&
          mainMaterial.color._id === product.mainMaterial.color._id) ||
        pattern?._id === product.pattern?._id
    );
  }

  imagesList = imagesList.map(({ _id, images, rate, sizes, translationsKey }) => {
    const availableSize =
      sizes && sizes.filter(({ size, price }) => size.available && price)[0]?.price;

    const checkPrice = () =>
      availableSize ? (
        <div className={styles.price}>
          {getPriceWithCurrency(availableSize)}
          <span>{currencySign} </span>
        </div>
      ) : (
        <div> {t('product.sizeNotAvailable')} </div>
      );

    return (
      <SimilarProductsItem
        currencySign={currencySign}
        key={_id}
        price={checkPrice()}
        rate={rate}
        translationsKey={translationsKey}
        imageUrl={images?.primary.medium}
        id={_id}
      />
    );
  });

  return (
    <div>
      {imagesList.length ? (
        <div className={styles.similarItems}>
          <div>
            <h2 className={styles.title}>{t('product.similarItems.title')}</h2>
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
