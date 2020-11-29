import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from '@material-ui/core';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';
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

import { DEFAULT_SIZE, DEFAULT_PRICE } from '../../configs';
import { CurrencyAndProductsSelector } from '../../redux/selectors/multiple.selectors';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const {
    product,
    isLoading,
    categoryFilter,
    productToSend,
    currency
  } = useSelector(CurrencyAndProductsSelector);
  const dispatch = useDispatch();
  const styles = useStyles();

  const [sizeIsNotSelectedError, setSizeIsNotSelectedError] = useState(false);

  const currencySign =
    currency === 0 ? faHryvnia : currency === 1 ? faDollarSign : '';

  const {
    _id: productId,
    name: productName,
    basePrice,
    images,
    options = [],
    category
  } = product || {};

  const { selectedSize } = productToSend;

  const defaultSize = useMemo(
    () =>
      options[0]
        ? options.find(({ size }) => !!size && size.name === DEFAULT_SIZE)
        : {},
    [options]
  );

  const { volumeInLiters, weightInKg } =
    (defaultSize && defaultSize.size) || (options[0] && options[0].size) || {};

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
          image: images.primary.small,
          totalPrice: basePrice,
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
    productId,
    productName,
    images,
    currency
  ]);

  useEffect(() => {
    if (categoryFilter) {
      dispatch(getFiltredProducts({}));
    }
  }, [dispatch, categoryFilter]);

  const uniqueSizes = useMemo(
    () => [
      ...new Set(
        options.length && options[0].size
          ? options.map(({ size: { available, name } }) => available && name)
          : null
      )
    ],
    [options]
  );

  const uniqueBottomMaterials = useMemo(
    () => [
      ...new Set(
        options.length && options[0].bottomMaterial
          ? options.map(({ bottomMaterial: item }) =>
              item && item.available ? item.name[1].value : null
            )
          : null
      )
    ],
    [options]
  );

  const uniqueAdditions = useMemo(
    () => [
      ...new Set(
        options.length && options[0].additions
          ? options
              .filter(({ additions }) => additions.length > 0)
              .map(({ additions: [{ name }] }) => name[1].value)
          : null
      )
    ],
    [options]
  );

  const productAdditions = useMemo(
    () =>
      options.length
        ? uniqueAdditions.map(
            (item) =>
              options
                .filter(({ additions }) => additions.length > 0)
                .find(({ additions: [{ name }] }) => item === name[1].value)
                .additions[0]
          )
        : null,
    [uniqueAdditions, options]
  );

  const sizes = useMemo(
    () =>
      options.length
        ? uniqueSizes.map(
            (item) => options.find(({ size: { name } }) => item === name).size
          )
        : null,
    [uniqueSizes, options]
  );

  const bottomMaterials = useMemo(
    () =>
      uniqueBottomMaterials[0] && options && options.length
        ? uniqueBottomMaterials.map(
            (item) =>
              options.find(
                ({ bottomMaterial: { name } }) => item === name[1].value
              ).bottomMaterial
          )
        : null,
    [uniqueBottomMaterials, options]
  );

  const handleSizeChange = (selectedId) => {
    const oldPrice = selectedSize
      ? sizes.find(({ _id }) => _id === selectedSize).additionalPrice
      : DEFAULT_PRICE;

    const size = sizes.find(({ _id }) => _id === selectedId);

    const newTotalPrice = productToSend.totalPrice.map((item, i) => {
      item.value =
        item.value - oldPrice[i].value + size.additionalPrice[i].value;
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
          <ProductInfo currencySign={currencySign} />
          <ProductSizes
            handleSizeChange={handleSizeChange}
            sizes={sizes}
            sizeIsNotSelectedError={sizeIsNotSelectedError}
          />
          <ProductFeatures
            currencySign={currencySign}
            bottomMaterials={bottomMaterials}
            additions={productAdditions}
          />
          <ProductSubmit
            bottomMaterials={bottomMaterials}
            sizes={sizes}
            productToSend={productToSend}
            setSizeIsNotSelectedError={setSizeIsNotSelectedError}
          />
        </div>
      </div>
      <SimilarProducts currencySign={currencySign} />
      <Comments />
    </Card>
  );
};

export default ProductDetails;
