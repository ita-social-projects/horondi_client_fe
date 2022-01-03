import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';

import { useTranslation } from 'react-i18next';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from './product-details.styles';

import { TOAST_SETTINGS } from './constants';
import ProductImages from './product-images';
import ProductInfo from './product-info';
import ProductSizes from './product-sizes';
import ProductSubmit from './product-submit';
import SimilarProducts from './similar-products';
import Comments from './comments';
import ToastContainer from '../../containers/toast';
import { getProductById } from './operations/product-details.queries';
import { clearProductToSend, setProductToSend } from '../../redux/products/products.actions';
import { selectCurrencyProductsCategoryFilter } from '../../utils/multiple.selectors';
import routes from '../../configs/routes';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { useIsLoadingOrError } from '../../hooks/useIsLoadingOrError';
import { setToastMessage, setToastSettings } from '../../redux/toast/toast.actions';
import useAddProductToWishlistHandler from '../../hooks/use-add-product-to-wishlist-handler';
import ProductDescription from './product-description';
import ProductPath from './product-path/product-path';
import { ArrowIcon } from '../../images/profile-icons';

const { pathToCategory } = routes;

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const { productToSend, currency } = useSelector(selectCurrencyProductsCategoryFilter);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();
  const [sizeIsNotSelectedError, setSizeIsNotSelectedError] = useState(false);
  const { loading, error, data } = useQuery(getProductById, {
    variables: { id }
  });
  const { isLoading, isError } = useIsLoadingOrError([loading], [error]);
  const product = data?.getProductById || {};
  const {
    _id: productId,
    name: productName,
    images,
    category,
    sizes,
    mainMaterial,
    bottomMaterial,
    innerMaterial,
    pattern,
    available,
    translationsKey
  } = product;

  const availableSizes = sizes && sizes.filter(({ size }) => size.available);
  const currentSize = availableSizes ? availableSizes[0] : {};
  const currentSizeIndex = sizes && currentSize ? sizes.indexOf(currentSize) : -1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, dispatch]);
  const [countComments, setCountComments] = useState(0);

  useEffect(() => {
    if (product.category) {
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
                thumbnail: images.additional[0]?.thumbnail
              }
            }
          },
          price: currentSize?.price,
          options: {
            size: currentSize?.size
          },
          allSizes: availableSizes
        })
      );
    }

    return () => {
      setSizeIsNotSelectedError(false);
      dispatch(clearProductToSend());
    };
  }, [currentSize, product, category, dispatch, productId, productName, images, currency]);

  const [isInWishlist, addOrRemoveItemFromWishlistHandler] =
    useAddProductToWishlistHandler(product);
  const wishlistHandler = () => {
    addOrRemoveItemFromWishlistHandler();

    if (isInWishlist) {
      dispatch(setToastMessage(t('product.toastMessage.removedFromWishList')));
      dispatch(setToastSettings(TOAST_SETTINGS));
    } else {
      dispatch(setToastMessage(t('product.toastMessage.addedToWishList')));
      dispatch(setToastSettings(TOAST_SETTINGS));
    }
  };

  const wishlistTip = isInWishlist
    ? t('product.tooltips.removeWishful')
    : t('product.tooltips.addWishful');
  const checkCountComments = (count) => {
    setCountComments(count);
  };

  const checkDisabledProduct = () =>
    (currentSizeIndex >= 0 && sizes ? sizes[currentSizeIndex].size.available : '') &&
    available &&
    mainMaterial.material.available &&
    bottomMaterial.material.available &&
    innerMaterial.material.available;

  const handleSizeChange = (selectedPosition) => {
    const selectedSize = sizes[selectedPosition];
    dispatch(
      setProductToSend({
        ...productToSend,
        id: Date.now().toString(),
        price: selectedSize.price,
        dimensions: {
          volumeInLiters: selectedSize.size.volumeInLiters,
          weightInKg: selectedSize.size.weightInKg
        },
        options: {
          size: selectedSize.size
        },
        allSizes: availableSizes
      })
    );

    if (sizeIsNotSelectedError) {
      setSizeIsNotSelectedError(false);
    }
  };
  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  return (
    <Card className={styles.container}>
      <div className={styles.productContainer}>
        <ProductPath category={category} translationsKey={translationsKey} />
        <Link to={pathToCategory} className={styles.backBtn}>
          <ArrowIcon className={styles.arrowIcon} />
        </Link>
        <div className={styles.product}>
          {product.images ? <ProductImages images={product.images} /> : null}
          <div className={styles.productDetails}>
            {!loading && (
              <ProductInfo
                product={product}
                countComments={countComments}
                checkDisabledProduct={checkDisabledProduct()}
                currency={currency}
                currentPrice={productToSend.price}
              />
            )}
            <ProductSizes
              handleSizeChange={handleSizeChange}
              checkDisabledProduct={checkDisabledProduct()}
              sizes={sizes}
              currentSize={productToSend.options.size}
              sizeIsNotSelectedError={sizeIsNotSelectedError}
            />
            <div className={styles.test}>
              <ProductSubmit
                disabled={!checkDisabledProduct()}
                product={product}
                setSizeIsNotSelectedError={setSizeIsNotSelectedError}
              />
              <Tooltip title={wishlistTip} placement='bottom'>
                {isInWishlist ? (
                  <FavoriteIcon data-cy='wishful' onClick={wishlistHandler} />
                ) : (
                  <FavouriteBorderIcon data-cy='not-wishful' onClick={wishlistHandler} />
                )}
              </Tooltip>
            </div>
          </div>
          {product.description ? (
            <ProductDescription
              product={product}
              currentSizeIndex={currentSizeIndex}
              checkDisabledProduct={checkDisabledProduct()}
            />
          ) : null}
        </div>
      </div>
      {product._id ? <SimilarProducts product={product} /> : null}
      {product._id ? (
        <Comments productId={product._id} checkCountComments={checkCountComments} />
      ) : null}
      <ToastContainer />
    </Card>
  );
};

export default ProductDetails;
