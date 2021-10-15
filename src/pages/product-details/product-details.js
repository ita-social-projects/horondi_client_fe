import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';

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
import { getProductById } from './operations/product-details.queries';

import { clearProductToSend, setProductToSend } from '../../redux/products/products.actions';
import { selectCurrencyProductsCategoryFilter } from '../../redux/selectors/multiple.selectors';

import routes from '../../const/routes';
import ThemeContext from '../../context/theme-context';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const { pathToCategory } = routes;

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const { productToSend, currency } = useSelector(
    selectCurrencyProductsCategoryFilter
  );

  const dispatch = useDispatch();
  const styles = useStyles();
  const [sizeIsNotSelectedError, setSizeIsNotSelectedError] = useState(false);
  const [product, setProduct] = useState({});
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
  const isLightTheme = useContext(ThemeContext);

  const { loading, error } = useQuery(getProductById, {
    variables: { id },
    onCompleted: (data) => setProduct(data.getProductById)
  });

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
                thumbnail: images.additional[0].thumbnail
              }
            }
          },
          price: currentSize.price,
          options: {
            size: currentSize.size
          },
          allSizes: availableSizes,
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
          size: selectedSize.size
        },
        allSizes: availableSizes
      })
    );

    if (sizeIsNotSelectedError) {
      setSizeIsNotSelectedError(false);
    }
  };

  if (loading || error) return errorOrLoadingHandler(error, loading);

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
          {currentSize.size ? (
            <ProductInfo price={currentSize.size.price} product={product} />
          ) : null}
          <ProductSizes
            handleSizeChange={handleSizeChange}
            sizes={sizes}
            sizeIsNotSelectedError={sizeIsNotSelectedError}
          />
          {sizes ? (
            <ProductSubmit
              sizes={sizes}
              product={product}
              setSizeIsNotSelectedError={setSizeIsNotSelectedError}
            />
          ) : null}
        </div>
      </div>
      {product._id ? <SimilarProducts product={product} /> : null}
      {product._id ? <Comments productId={product._id} /> : null}
      <ToastContainer />
    </Card>
  );
};

export default ProductDetails;
