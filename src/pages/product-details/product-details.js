import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '@material-ui/core';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';
import { useStyles } from './product-details.styles';

import ProductImages from './product-images';
import ProductInfo from './product-info';
import ProductSizes from './product-sizes';
import ProductSubmit from './product-submit';
import SimilarProducts from './similar-products';
import Comments from './comments';

import { Loader } from '../../components/loader/loader';
import {
  clearProductToSend,
  getProduct,
  setCategoryFilter,
  setProductToSend
} from '../../redux/products/products.actions';

import { DEFAULT_PRICE } from '../../configs';
import { selectCurrencyProductsCategoryFilter } from '../../redux/selectors/multiple.selectors';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const { isLoading, productToSend, currency, product } = useSelector(
    selectCurrencyProductsCategoryFilter
  );
  const dispatch = useDispatch();
  const styles = useStyles();

  const [sizeIsNotSelectedError, setSizeIsNotSelectedError] = useState(false);

  const currencySign = currency === 0 ? faHryvnia : currency === 1 ? faDollarSign : '';

  const {
    _id: productId,
    name: productName,
    basePrice,
    images,
    category,
    sizes,
    mainMaterial,
    pattern
  } = product || {};

  const { selectedSize } = productToSend;

  const { volumeInLiters, weightInKg } = sizes ? sizes[0] : {};

  useEffect(() => {
    dispatch(getProduct(id));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  useEffect(() => {
    if (product) {
      dispatch(setCategoryFilter([category._id]));
      dispatch(
        setProductToSend({
          _id: productId,
          name: productName,
          image: images.additional.small,
          totalPrice: basePrice,
          dimensions: { volumeInLiters, weightInKg },
          categoryID: category._id,
          mainMaterialColorID: mainMaterial.color._id,
          patternID: pattern._id
        })
      );
    }

    return () => {
      setSizeIsNotSelectedError(false);
      dispatch(clearProductToSend());
    };
  }, [
    basePrice,
    volumeInLiters,
    weightInKg,
    product,
    category,
    dispatch,
    productId,
    productName,
    images,
    currency
  ]);

  const handleSizeChange = (selectedId) => {
    const oldPrice = selectedSize
      ? sizes.find(({ _id }) => _id === selectedSize).additionalPrice
      : DEFAULT_PRICE;

    const size = sizes.find(({ _id }) => _id === selectedId);
    const newTotalPrice = productToSend.totalPrice.map((item, i) => {
      item.value = item.value - oldPrice[i].value + size.additionalPrice[i].value;
      return item;
    });

    dispatch(
      setProductToSend({
        ...productToSend,
        totalPrice: newTotalPrice,
        dimensions: {
          volumeInLiters: size.volumeInLiters,
          weightInKg: size.weightInKg
        },
        selectedSize: selectedId
      })
    );

    if (sizeIsNotSelectedError) {
      setSizeIsNotSelectedError(false);
    }
  };

  if (isLoading || !product) {
    return <Loader />;
  }

  return (
    <Card className={styles.container}>
      <div className={styles.product}>
        <ProductImages />
        <div className={styles.productDetails}>
          <ProductInfo currencySign={currencySign} />
          <ProductSizes
            handleSizeChange={handleSizeChange}
            sizes={sizes}
            sizeIsNotSelectedError={sizeIsNotSelectedError}
          />
          <ProductSubmit sizes={sizes} setSizeIsNotSelectedError={setSizeIsNotSelectedError} />
        </div>
      </div>
      <SimilarProducts currencySign={currencySign} />
      <Comments />
    </Card>
  );
};

export default ProductDetails;
