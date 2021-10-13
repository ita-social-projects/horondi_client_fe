import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useStyles } from './similar-products.styles';

import { selectInfoForSimilarProducts } from './selector';

import { SIMILAR_ITEMS } from '../../../translations/product-details.translations';
import { RESPONSIVE_PDP } from '../../../configs';
import SimilarProductsItem from './similar-products-item';
import { similarProductForCart } from '../../../utils/productDetails';
import { getCurrencySign } from '../../../utils/currency';
import { SIZE_NOT_AVAILABLE } from '../../../translations/product-list.translations';
import ThemeContext from '../../../context/theme-context';

const SimilarProducts = ({ cartList }) => {
  const styles = useStyles();
  const { language, similarProducts, currency, product } = useSelector(
    selectInfoForSimilarProducts
  );

  const isLightTheme = useContext(ThemeContext);
  const { title } = SIMILAR_ITEMS[language];
  const currencySign = getCurrencySign(currency);
  const titleClass = isLightTheme ? styles.lightThemeTitle : styles.darkThemeTitle;
  let imagesList;

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
