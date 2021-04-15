import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';
import { useStyles } from './product-details.styles';

import { selectCurrencySign } from '../../utils/currency';
import { MATERIAL_UI_COLOR } from '../../const/material-ui';

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

import { selectCurrencyProductsCategoryFilter } from '../../redux/selectors/multiple.selectors';
import routes from '../../configs/routes';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const { isLightTheme, isLoading, productToSend, currency, product } = useSelector(
    selectCurrencyProductsCategoryFilter
  );
  const dispatch = useDispatch();
  const styles = useStyles();
  const [sizeIsNotSelectedError, setSizeIsNotSelectedError] = useState(false);

  const currencySign = selectCurrencySign(currency, faHryvnia, faDollarSign);

  const {
    _id: productId,
    name: productName,
    images,
    category,
    sizes,
    mainMaterial,
    bottomMaterial,
    pattern
  } = product || {};

  const currentSize = sizes ? sizes[0] : {};

  useEffect(() => {
    dispatch(getProduct(id));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  useEffect(() => {
    if (product) {
      dispatch(setCategoryFilter([category._id]));
      dispatch(
        setProductToSend({
          product: {
            _id: productId,
            category: {
              _id: category._id
            },
            name: productName,
            mainMaterial,
            bottomMaterial,
            pattern,
            images: {
              primary: {
                thumbnail: images.additional[0].thumbnail
              }
            }
          },
          price: currentSize.additionalPrice,
          options: {
            size: currentSize
          },
          dimensions: {
            volumeInLiters: currentSize.volumeInLiters,
            weightInKg: currentSize.weightInKg
          }
        })
      );
    }

    return () => {
      setSizeIsNotSelectedError(false);
      dispatch(clearProductToSend());
    };
  }, [
    currentSize.volumeInLiters,
    currentSize.weightInKg,
    product,
    category,
    dispatch,
    productId,
    productName,
    images,
    currency
  ]);

  const handleSizeChange = (selectedId) => {
    const selectedSize = sizes.find(({ _id }) => _id === selectedId);

    dispatch(
      setProductToSend({
        ...productToSend,
        price: selectedSize.additionalPrice,
        dimensions: {
          volumeInLiters: selectedSize.volumeInLiters,
          weightInKg: selectedSize.weightInKg
        },
        options: {
          size: selectedSize
        }
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
      <Link to={routes.pathToCategory} className={styles.backBtn}>
        <KeyboardBackspaceIcon
          color={isLightTheme ? MATERIAL_UI_COLOR.PRIMARY : MATERIAL_UI_COLOR.ACTION}
        />
      </Link>
      <div className={styles.product}>
        <ProductImages />
        <div className={styles.productDetails}>
          <ProductInfo currencySign={currencySign} price={currentSize.additionalPrice} />
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
