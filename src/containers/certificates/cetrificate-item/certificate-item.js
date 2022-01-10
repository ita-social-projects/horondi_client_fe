import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
import { TableCell, TableRow } from '@material-ui/core';
// import _ from 'lodash';

// import { useLazyQuery } from '@apollo/client';
import { useStyles } from './certificate-item.styles';
// import { getCurrencySign } from '../../../utils/currency';
// import routes from '../../../../configs/routes';
// import Loader from '../../../../components/loader';
import CertificateCodeCopy from '../../../images/certificateCodeCopy';
import image500 from '../../../images/sertificate-500.png';
// import image1000 from '../../../images/sertificate-1000.png';
// import image1500 from '../../../images/sertificate-1500.png';
// const { pathToProducts } = routes;

const CertificateItem = ({ item }) => {
  // const dispatch = useDispatch();
  const styles = useStyles();
  const { t } = useTranslation();
  // const { currency } = useSelector(({ Currency }) => ({
  //   currency: Currency.currency
  // }));
  // const [inputValue, setInputValue] = useState(item.quantity);
  // const currencySign = getCurrencySign(currency);
  // const [currentSize, setCurrentSize] = useState(item.sizeAndPrice.size._id);
  // const [firstlyMounted, toggleFirstlyMounted] = useState(false);
  // const [currentPrice, setCurrentPrice] = useState(item.sizeAndPrice.price[currency].value);
  // const { changeQuantity, changeSize, getCartItem, changeSizeConstructor } = cartOperations;

  // const onChangeQuantity = useCallback(
  //   _.debounce((value) => {
  //     changeQuantity(item.id, value);
  //   }, 500),
  //   [dispatch, changeCartItemUserQuantity]
  // );

  // const [
  //   getProductByIdHandler,
  //   {
  //     data: constructorByModel,
  //     called: calledProduct,
  //     error: errorProduct,
  //     loading: loadingProduct
  //   }
  // ] = useLazyQuery(getProductById, {
  //   variables: {
  //     id: item?.productId
  //   }
  // });

  // const [
  //   getConstructorByIdHandler,
  //   {
  //     data: constructorByProduct,
  //     called: calledConstructor,
  //     error: constructorError,
  //     loading: loadingConstructor
  //   }
  // ] = useLazyQuery(getConstructorById, {
  //   variables: {
  //     id: item.productId
  //   }
  // });

  // const isConstructor = Object.keys(item.constructor).length !== 0;

  // if (!isConstructor && !calledProduct) {
  //   getProductByIdHandler();
  // }
  // if (isConstructor && !calledConstructor) {
  //   getConstructorByIdHandler();
  // }

  // const cartItem = isConstructor
  //   ? constructorByProduct?.getConstructorById
  //   : constructorByModel?.getProductById;

  // const itemFoto = isConstructor
  //   ? cartItem?.model.images.thumbnail
  //   : cartItem?.images.primary.thumbnail;

  // const itemName = isConstructor ? cartItem?.model.translationsKey : cartItem?.translationsKey;

  // const itemMaterial = cartItem?.bottomMaterial ? (
  //   <div className={styles.itemDescription}>
  //     {t('cart.bottomMaterial')}: {t(`${cartItem.bottomMaterial.material.translationsKey}.name`)}
  //   </div>
  // ) : (
  //   <div className={styles.itemDescription}>
  //     {t('cart.bottomMaterial')}: {t(`${item.sizeAndPrice.bottomMaterial?.translationsKey}.name`)}
  //   </div>
  // );

  // const mapCallback = (obj) => {
  //   let size = obj;
  //   if (obj.size) size = obj.size;
  //   return (
  //     size.available && (
  //       <MenuItem key={size._id} value={size._id}>
  //         {size.name}
  //       </MenuItem>
  //     )
  //   );
  // };

  // const itemSize = !isConstructor
  //   ? cartItem?.sizes && cartItem.sizes.map(mapCallback)
  //   : cartItem?.model.sizes && cartItem.model.sizes.map(mapCallback);

  // const { isLoading, isError } = useIsLoadingOrError(
  //   [loadingProduct, loadingConstructor],
  //   [constructorError, errorProduct]
  // );
  // useEffect(() => {
  //   const itemData = getCartItem(item.id);
  //   setCurrentSize(itemData.sizeAndPrice.size._id);
  //   setCurrentPrice(itemData.sizeAndPrice.price[currency].value);
  // }, [handleSizeChange]);

  // const onDeleteItem = () => {
  //   setModalVisibility(true);
  //   setModalItem(item);
  // };

  // useEffect(() => {
  //   toggleFirstlyMounted(true);
  // }, []);

  // if (isLoading || isError) return errorOrLoadingHandler(isError, isLoading);

  // if (loadingProduct)
  //   return (
  //     <tr>
  //       <td>
  //         <Loader width={50} height={50} heightWrap={50} />
  //       </td>
  //     </tr>
  //   );

  // function handleSizeChange(event) {
  //   !isConstructor
  //     ? cartItem.sizes &&
  //       cartItem.sizes.map((cartData) => {
  //         if (event.target.value === cartData.size._id && firstlyMounted) {
  //           changeSize(item.id, cartData);
  //         }
  //         return null;
  //       })
  //     : cartItem.model.sizes &&
  //       cartItem.model.sizes.map((cartData) => {
  //         if (event.target.value === cartData._id && firstlyMounted) {
  //           changeSizeConstructor(item.id, cartData);
  //         }
  //         return null;
  //       });
  // }

  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
  }

  return (
    <TableRow classes={{ root: styles.root }} data-cy='certificate-item'>
      <TableCell classes={styles.image} data-cy='certificate-item-img'>
        {/* <Link to={`${pathToProducts}/${cartItem._id}`}>
          <img className={styles.itemImg} src={`${IMG_URL}${itemFoto} `} alt='product-img' />
        </Link> */}
        {/* {<img src={image} className={styles.itemImg} alt='product-img' />} */}
        {<img src={image500} className={styles.itemImg} alt='product-img' />}
      </TableCell>
      <TableCell data-cy='certificate-item-code'>
        <div className={styles.code} value={item.code}>
          <textarea className={styles.area} type='text' ref={textAreaRef} value={item.code} />
          <button className={styles.iconBtn} onClick={copyToClipboard}>
            <CertificateCodeCopy alt='Certificate copy icon' className={styles.copyIcon} />
          </button>
        </div>
      </TableCell>
      <TableCell data-cy='certificate-item-price'>
        <div className={styles.price}>{item.price}</div>
      </TableCell>
      <TableCell data-cy='certificate-item-expiration'>
        <div className={styles.item}>{item.expirationDate}</div>
      </TableCell>
      <TableCell data-cy='certificate-item-status'>
        <div className={styles.status}>{t(`certificate.${item.status}`)}</div>
      </TableCell>
    </TableRow>
  );
};

export default CertificateItem;

/* <VerifiedPurchaseIcon
alt='Verified purchase icon'
className={styles.boughtIcon}
/> */
