import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from '@material-ui/core';
import { useStyles } from './product-details.styles';

import Comments from './comments';
import SimilarProducts from './similar-products';
import ProductSizes from './product-sizes';
import ProductSubmit from './product-submit';
import ProductFeatures from './product-features/product-features';
import ProductInfo from './product-info';
import ProductImages from './product-images';
import { Loader } from '../../components/loader/loader';
import {
  clearProductToSend,
  getFiltredProducts,
  getProduct,
  setCategoryFilter,
  setProductToSend
} from '../../redux/products/products.actions';

import { DEFAULT_SIZE } from '../../configs';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const {
    product,
    isLoading,
    productUrl,
    categoryFilter,
    productToSend
  } = useSelector(
    ({
      Products: { product, productLoading, productToSend, filters },
      router
    }) => ({
      categoryFilter: filters.categoryFilter,
      product,
      isLoading: productLoading,
      productUrl: router.location.pathname,
      productToSend
    })
  );
  const dispatch = useDispatch();
  const styles = useStyles();

  const [sizeIsNotSelectedError, setSizeIsNotSelectedError] = useState(false);

  const { _id, name, basePrice, images, options, category } = product || {};
  const { selectedSize } = productToSend;

  const { volumeInLiters, weightInKg } = useMemo(
    () =>
      product && options[0].size
        ? options.find(({ size: { name } }) => name === DEFAULT_SIZE).size
        : {},
    [product, options]
  );

  useEffect(() => {
    dispatch(getProduct(id));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  useEffect(() => {
    if (product) {
      dispatch(setCategoryFilter([category._id]));
      dispatch(
        setProductToSend({
          _id,
          name,
          images,
          productUrl,
          totalPrice: basePrice[0].value / 100,
          dimensions: { volumeInLiters, weightInKg }
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
    _id,
    name,
    images,
    productUrl
  ]);

  useEffect(() => {
    if (categoryFilter) {
      dispatch(getFiltredProducts({}));
    }
  }, [dispatch, categoryFilter]);

  const uniqueSizes = useMemo(
    () => [
      ...new Set(
        product && options[0].size
          ? options.map(({ size: { available, name } }) => available && name)
          : null
      )
    ],
    [options, product]
  );

  const uniqueBottomMaterials = useMemo(
    () => [
      ...new Set(
        product && options[0].bottomMaterial
          ? options.map(({ bottomMaterial: item }) =>
              item && item.available ? item.name[1].value : null
            )
          : null
      )
    ],
    [options, product]
  );

  const uniqueAdditions = useMemo(
    () => [
      ...new Set(
        product && options[0].additions
          ? options
              .filter(({ additions }) => additions.length > 0)
              .map(
                ({ additions: [{ available, name }] }) =>
                  available && name[1].value
              )
          : null
      )
    ],
    [options, product]
  );

  const sizes = useMemo(
    () =>
      uniqueSizes.map(
        (item) => options.find(({ size: { name } }) => item === name).size
      ),
    [uniqueSizes, options]
  );

  const bottomMaterials = useMemo(
    () =>
      uniqueBottomMaterials[0]
        ? uniqueBottomMaterials.map(
            (item) =>
              options.find(
                ({ bottomMaterial: { name } }) => item === name[1].value
              ).bottomMaterial
          )
        : null,
    [uniqueBottomMaterials, options]
  );

  const additions = useMemo(
    () =>
      uniqueAdditions.map(
        (item) =>
          options
            .filter(({ additions }) => additions.length > 0)
            .find(({ additions: [{ name }] }) => item === name[1].value)
            .additions[0]
      ),
    [uniqueAdditions, options]
  );

  const handleSizeChange = (id) => {
    const oldPrice = selectedSize
      ? sizes.find(({ _id }) => _id === selectedSize).additionalPrice[0].value /
        100
      : 0;
    const { additionalPrice, volumeInLiters, weightInKg } = sizes.find(
      ({ _id }) => _id === id
    );
    const newPrice =
      productToSend.totalPrice - oldPrice + additionalPrice[0].value / 100;

    dispatch(
      setProductToSend({
        ...productToSend,
        totalPrice: newPrice,
        dimensions: { volumeInLiters, weightInKg },
        selectedSize: id
      })
    );

    if (sizeIsNotSelectedError) {
      setSizeIsNotSelectedError(false);
    }
  };

  if (isLoading || !product) {
    return (
      <div className={styles.center}>
        <Loader />
      </div>
    );
  }

  return (
    <Card className={styles.container}>
      <div className={styles.product}>
        <ProductImages />
        <div className={styles.productDetails}>
          <ProductInfo />
          <ProductSizes
            handleSizeChange={handleSizeChange}
            sizes={sizes}
            sizeIsNotSelectedError={sizeIsNotSelectedError}
          />
          <ProductFeatures
            bottomMaterials={bottomMaterials}
            additions={additions}
          />
          <ProductSubmit
            bottomMaterials={bottomMaterials}
            sizes={sizes}
            productToSend={productToSend}
            setSizeIsNotSelectedError={setSizeIsNotSelectedError}
          />
        </div>
      </div>
      <SimilarProducts />
      <Comments />
    </Card>
  );
};

export default ProductDetails;
