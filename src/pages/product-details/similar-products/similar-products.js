import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import './similar-products.css';
import { useStyles } from './similar-products.styles';
import { SIMILAR_ITEMS } from '../../../translations/product-details.translations';
import { RESPONSIVE_PDP } from '../../../configs';
import SimilarProductsItem from './similar-products-item';
import { similarProductForCart } from '../../../utils/productDetails';
import { getCurrencySign } from '../../../utils/currency';
import { SIZE_NOT_AVAILABLE } from '../../../translations/product-list.translations';
import ThemeContext from '../../../context/theme-context';
import { getFilteredProductsQuery } from '../../product-list-page/operations/product-list.queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';

const SimilarProducts = ({ cartList, product }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const styles = useStyles();

  const { i18n } = useTranslation();
  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency,
  }));
  const language = i18n.language === 'ua' ? 0 : 1;

  const { error, loading } = useQuery(getFilteredProductsQuery, {
    onCompleted: (data) => setSimilarProducts(data.getProducts.items)
  });

  const isLightTheme = useContext(ThemeContext);
  const { title } = SIMILAR_ITEMS[language];
  const currencySign = getCurrencySign(currency);
  const titleClass = isLightTheme ? styles.lightThemeTitle : styles.darkThemeTitle;
  let imagesList;

  if (error || loading) return errorOrLoadingHandler(error, loading);

  if (cartList) {
    imagesList = similarProductForCart(similarProducts, cartList);
  } else {
    imagesList = similarProducts.filter(
      ({ category, mainMaterial, pattern }) =>
        category._id !== product.category._id &&
        (mainMaterial.color._id === product.mainMaterial.color._id ||
          pattern._id === product.pattern._id)
    );
  }

  imagesList = imagesList.map(({ _id, images, rate, name, sizes }) => {
    const availableSize =
      sizes && sizes.filter(({ size, price }) => size.available && price)[0].price[currency].value;

    return (
      <SimilarProductsItem
        currencySign={currencySign}
        key={_id}
        price={availableSize ? Math.round(availableSize) : SIZE_NOT_AVAILABLE[language].value}
        name={name}
        rate={rate}
        imageUrl={images.primary.medium}
        id={_id}
      />
    );
  });

  return (
    <div>
      {imagesList.length ? (
        <div className={styles.similarItems}>
          <div>
            <h2 className={titleClass}>{title}</h2>
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
