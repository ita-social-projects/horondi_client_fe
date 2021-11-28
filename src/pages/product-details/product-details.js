import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useTheme } from '@material-ui/styles';

import { useTranslation } from 'react-i18next';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from './product-details.styles';
import { useStyles as useSubmitStyles } from './product-submit/product-submit.styles';
import { MATERIAL_UI_COLOR, toastSettings } from '../../configs';
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

const { pathToCategory } = routes;

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const { productToSend, currency } = useSelector(selectCurrencyProductsCategoryFilter);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();
  const productSubmitStyles = useSubmitStyles();
  const { palette } = useTheme();
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
    pattern
  } = product;
  const availableSizes =
    sizes && sizes.filter(({ size, price }) => size.available && { size, price });

  const currentSize = availableSizes ? availableSizes[0] : {};
  const isLightTheme = palette.type === 'light';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, dispatch]);

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
          allSizes: availableSizes,
          dimensions: {
            volumeInLiters: currentSize?.size.volumeInLiters,
            weightInKg: currentSize?.size.weightInKg
          }
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
      dispatch(setToastSettings(toastSettings));
    } else {
      dispatch(setToastMessage(t('product.toastMessage.addedToWishList')));
      dispatch(setToastSettings(toastSettings));
    }
  };

  const wishlistTip = isInWishlist
    ? t('product.tooltips.removeWishful')
    : t('product.tooltips.addWishful');

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
      <Link to={pathToCategory} className={styles.backBtn}>
        <KeyboardBackspaceIcon
          color={isLightTheme ? MATERIAL_UI_COLOR.PRIMARY : MATERIAL_UI_COLOR.ACTION}
        />
      </Link>
      <div className={styles.product}>
        {product.images ? <ProductImages images={product.images} /> : null}
        <div className={styles.productDetails}>
          {!loading && (
            <ProductInfo
              price={currentSize?.size ? currentSize.size.price : {}}
              product={product}
            />
          )}
          {currentSize ? (
            <>
              <ProductSizes
                handleSizeChange={handleSizeChange}
                sizes={sizes}
                sizeIsNotSelectedError={sizeIsNotSelectedError}
              />
              <ProductSubmit
                product={product}
                setSizeIsNotSelectedError={setSizeIsNotSelectedError}
              />
            </>
          ) : (
            <>
              <div className={styles.submit}>
                <Tooltip title={wishlistTip} placement='bottom'>
                  {isInWishlist ? (
                    <FavoriteIcon
                      data-cy='wishful'
                      className={productSubmitStyles.redHeart}
                      onClick={wishlistHandler}
                    />
                  ) : (
                    <FavouriteBorderIcon
                      data-cy='not-wishful'
                      className={productSubmitStyles.heart}
                      onClick={wishlistHandler}
                    />
                  )}
                </Tooltip>
              </div>
              <div className={styles.notAvailable}>{t('product.notAvailable')}</div>
            </>
          )}
        </div>
      </div>
      {product._id ? <SimilarProducts product={product} /> : null}
      {product._id ? <Comments productId={product._id} /> : null}
      <ToastContainer />
    </Card>
  );
};

export default ProductDetails;
