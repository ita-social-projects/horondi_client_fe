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
import { useAppStyles } from '../../components/app/app.styles';
import { defaultProductToSend, TOAST_SETTINGS } from './constants';
import ProductImages from './product-images';
import ProductInfo from './product-info';
import ProductSizes from './product-sizes';
import ProductSubmit from './product-submit';
import SimilarProducts from './similar-products';
import Comments from './comments';
import Toast from '../../containers/toast';
import { getProductById } from './operations/product-details.queries';
import routes from '../../configs/routes';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { useIsLoadingOrError } from '../../hooks/useIsLoadingOrError';
import { setToastMessage, setToastSettings } from '../../redux/toast/toast.actions';
import ProductDescription from './product-description';
import ProductPath from './product-path/product-path';
import { ArrowIcon } from '../../images/profile-icons';
import { useWishlist } from '../../hooks/use-wishlist';

const { pathToCategory } = routes;

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();
  const appStyles = useAppStyles();
  const [sizeIsNotSelectedError, setSizeIsNotSelectedError] = useState(false);
  const [productToSend, setProductToSend] = useState(defaultProductToSend);
  const [countComments, setCountComments] = useState(0);
  const { loading, error, data } = useQuery(getProductById, {
    variables: { id }
  });
  const { isLoading, isError } = useIsLoadingOrError([loading], [error]);
  const product = data?.getProductById || {};
  const { _id: productId, category, sizes, available, translationsKey } = product;

  const availableSizes = sizes && sizes.filter(({ size }) => size.available);
  const currentSize = availableSizes ? availableSizes[0] : {};
  const currentSizeIndex = sizes && currentSize ? sizes.indexOf(currentSize) : -1;

  const [isOpenedSnackbar, setIsOpenedSnackbar] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  useEffect(() => {
    if (product.category) {
      setProductToSend({
        id: Date.now().toString(),
        product: {
          _id: productId
        },
        price: currentSize?.price,
        options: {
          size: currentSize?.size
        }
      });
    }

    return () => {
      setSizeIsNotSelectedError(false);
    };
  }, [currentSize, product, productId]);

  const { isInWishlist, wishlistOperations } = useWishlist();
  const itemInWishlist = isInWishlist(product);
  const { addToWishlist, removeFromWishlist } = wishlistOperations;

  const wishlistHandler = () => {
    if (!isInWishlist(data?.getProductById)) {
      addToWishlist(data?.getProductById);
    } else {
      removeFromWishlist(data?.getProductById);
    }

    if (itemInWishlist) {
      dispatch(setToastMessage(t('product.toastMessage.removedFromWishList')));
      dispatch(setToastSettings(TOAST_SETTINGS));
    } else {
      dispatch(setToastMessage(t('product.toastMessage.addedToWishList')));
      dispatch(setToastSettings(TOAST_SETTINGS));
    }
  };

  const wishlistTip = itemInWishlist
    ? t('product.tooltips.removeWishful')
    : t('product.tooltips.addWishful');
  const checkCountComments = (count) => {
    setCountComments(count);
  };

  const handleSizeChange = (selectedPosition) => {
    const selectedSize = sizes[selectedPosition];
    setProductToSend({
      ...productToSend,
      id: Date.now().toString(),
      price: selectedSize.price,
      options: {
        size: selectedSize.size
      }
    });

    if (sizeIsNotSelectedError) {
      setSizeIsNotSelectedError(false);
    }
  };
  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  return (
    <div className={appStyles.rootApp}>
      <Card className={`${appStyles.containerApp} ${styles.container} `}>
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
                currency={currency}
                currentPrice={productToSend.price}
              />
            )}
            <ProductSizes
              handleSizeChange={handleSizeChange}
              available={available}
              sizes={sizes}
              currentSize={productToSend.options.size}
              sizeIsNotSelectedError={sizeIsNotSelectedError}
            />
            <div className={styles.submitWrapper}>
              <ProductSubmit
                disabled={!available}
                product={product}
                setSizeIsNotSelectedError={setSizeIsNotSelectedError}
                productToSend={productToSend}
              />
              <Tooltip title={wishlistTip} placement='bottom'>
                {itemInWishlist ? (
                  <FavoriteIcon data-cy='wishful' onClick={wishlistHandler} />
                ) : (
                  <FavouriteBorderIcon data-cy='not-wishful' onClick={wishlistHandler} />
                )}
              </Tooltip>
            </div>
          </div>
          {product.description ? (
            <ProductDescription product={product} currentSizeIndex={currentSizeIndex} />
          ) : null}
        </div>
        {product._id ? <SimilarProducts product={product} /> : null}
        {product._id ? (
          <Comments productId={product._id} checkCountComments={checkCountComments} />
        ) : null}
        <Toast
          isOpenedSnackbar={isOpenedSnackbar}
          setIsOpenedSnackbar={setIsOpenedSnackbar}
          message={t(
            `product.toastMessage.${isInWishlist ? 'addedToWishList' : 'removedFromWishList'}`
          )}
        />
      </Card>
    </div>
  );
};

export default ProductDetails;
