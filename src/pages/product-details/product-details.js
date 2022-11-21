import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Button, Card } from '@material-ui/core';

import { useTranslation } from 'react-i18next';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
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
  const { _id: productId, category, sizes, available, translationsKey, isDeleted } = product;

  const availableSizes = sizes && sizes.filter(({ size }) => size.available);
  const currentSize = availableSizes?.length && availableSizes[0];
  const [isOpenedSnackbar, setIsOpenedSnackbar] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  useEffect(() => {
    if (category) {
      setProductToSend({
        id: Date.now().toString(),
        product: {
          _id: productId
        },
        price: currentSize.price,
        options: {
          size: currentSize.size || {}
        }
      });
    }

    return () => {
      setSizeIsNotSelectedError(false);
    };
  }, [currentSize, category, productId]);

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

  const backToCatalog = () => {
    if (history.location.key) {
      history.goBack();
    } else {
      history.push(pathToCategory);
    }
  };

  const addToWishlistIcon = itemInWishlist ? (
    <FavoriteIcon data-cy='wishful' onClick={wishlistHandler} />
  ) : (
    <FavouriteBorderIcon data-cy='not-wishful' onClick={wishlistHandler} />
  );

  if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  return (
    <div className={appStyles.rootApp}>
      <Card className={`${appStyles.containerApp} ${styles.container} `}>
        <ProductPath category={category} translationsKey={translationsKey} />
        <Button className={styles.backBtn} onClick={backToCatalog}>
          <ArrowIcon className={styles.arrowIcon} />
        </Button>
        <div className={styles.product}>
          {product.images ? <ProductImages images={product.images} /> : null}
          <div className={styles.productDetails}>
            {!loading && (
              <ProductInfo
                product={product}
                countComments={countComments}
                currentPrice={productToSend.price}
              />
            )}
            <ProductSizes
              handleSizeChange={handleSizeChange}
              available={available}
              isDeleted={isDeleted}
              sizes={sizes}
              currentSize={productToSend.options.size}
              sizeIsNotSelectedError={sizeIsNotSelectedError}
            />
            <div className={styles.submitWrapper}>
              <ProductSubmit
                disabled={
                  isDeleted || !available || !Object.keys(productToSend.options.size).length
                }
                product={product}
                setSizeIsNotSelectedError={setSizeIsNotSelectedError}
                productToSend={productToSend}
              />
              <Tooltip
                className={styles.addToFavouriteButton}
                title={wishlistTip}
                placement='bottom'
              >
                <IconButton disabled={isDeleted}>{addToWishlistIcon}</IconButton>
              </Tooltip>
            </div>
          </div>
          {product.description ? (
            <ProductDescription product={product} currentSize={productToSend.options.size} />
          ) : null}
        </div>
        {productId ? <SimilarProducts product={product} /> : null}
        {productId ? (
          <Comments productId={productId} checkCountComments={checkCountComments} />
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
