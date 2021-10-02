import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useStyles } from './product-details.styles';

import { MATERIAL_UI_COLOR } from '../../const/material-ui';

import ProductImages from './product-images';
import ProductInfo from './product-info';
import ProductSizes from './product-sizes';
import ProductSubmit from './product-submit';
import SimilarProducts from './similar-products';
import Comments from './comments';
import ToastContainer from '../../containers/toast';

import { Loader } from '../../components/loader/loader';
import {
  clearProductToSend,
  getProduct,
  setCategoryFilter,
  setProductToSend
} from '../../redux/products/products.actions';

import { selectCurrencyProductsCategoryFilter } from '../../redux/selectors/multiple.selectors';
import routes from '../../const/routes';

const { pathToCategory } = routes;

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const { isLightTheme, isLoading, productToSend, currency, product } = useSelector(
    selectCurrencyProductsCategoryFilter
  );

  const dispatch = useDispatch();
  const styles = useStyles();
  const [sizeIsNotSelectedError, setSizeIsNotSelectedError] = useState(false);
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
  const availableSizes =
    sizes && sizes.filter(({ size, price }) => size.available && { size, price });

  const currentSize = availableSizes ? availableSizes[0] : {};

  useEffect(() => {
    dispatch(getProduct(id));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  useEffect(() => {
    if (product) {
      dispatch(setCategoryFilter([category._id]));
      dispatch(
        setProductToSend({
          id: Date.now().toString(),
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
          price: currentSize.price,
          options: {
            size: currentSize.size,
            allSizes: availableSizes
          },
          dimensions: {
            volumeInLiters: currentSize.size.volumeInLiters,
            weightInKg: currentSize.size.weightInKg
          }
        })
      );
    }

    return () => {
      setSizeIsNotSelectedError(false);
      dispatch(clearProductToSend());
    };
  }, [
    currentSize,
    currentSize,
    product,
    category,
    dispatch,
    productId,
    productName,
    images,
    currency
  ]);

  const handleSizeChange = (selectedPosition) => {
    const selectedSize = sizes[selectedPosition];

    dispatch(
      setProductToSend({
        ...productToSend,
        id: Date.now().toString(),
        price: selectedSize.price,
        dimensions: {
          volumeInLiters: selectedSize.volumeInLiters,
          weightInKg: selectedSize.weightInKg
        },
        options: {
          size: selectedSize.size,
          allSizes: availableSizes
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
      <Link to={pathToCategory} className={styles.backBtn}>
        <KeyboardBackspaceIcon
          color={isLightTheme ? MATERIAL_UI_COLOR.PRIMARY : MATERIAL_UI_COLOR.ACTION}
        />
      </Link>
      <div className={styles.product}>
        <ProductImages />
        <div className={styles.productDetails}>
          <ProductInfo price={currentSize.size.price} />
          <ProductSizes
            handleSizeChange={handleSizeChange}
            sizes={sizes}
            sizeIsNotSelectedError={sizeIsNotSelectedError}
          />
          <ProductSubmit sizes={sizes} setSizeIsNotSelectedError={setSizeIsNotSelectedError} />
        </div>
      </div>
      <SimilarProducts />
      <Comments />
      <ToastContainer />
    </Card>
  );
};

export default ProductDetails;
