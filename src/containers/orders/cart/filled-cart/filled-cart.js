import React, { useContext, useLayoutEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import OrderTable from '../../order/order-table';
import { useStyles } from './filled-cart.styles';
import { Loader } from '../../../../components/loader/loader';
import PathBack from '../path-back/path-back';
import routes from '../../../../configs/routes';
import SimilarProducts from '../../../../pages/product-details/similar-products';
import CartDiscount from '../cart-discount';
import { addProductFromConstructor } from '../../../../pages/cart/operations/cart.mutations';
import { CurrencyContext } from '../../../../context/currency-context';
import { useCurrency } from '../../../../hooks/use-currency';

const FilledCart = ({ items, cartOperations, certificate, promoCode }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const { currencySign } = useCurrency();

  const [addConstructorProduct] = useMutation(addProductFromConstructor);

  const { pathToCategory, pathToCheckout } = routes;
  const [price, setPrice] = useState();
  const [productFromConstructorLoading, setProductFromConstructorLoading] = useState(false);
  const [discount, setDiscount] = useState({});

  const { currency } = useContext(CurrencyContext);

  const { getTotalPrice, setCartItem, getTotalPricesWithPromoCode, getTotalPriceWithCertificate } =
    cartOperations;

  const { cartLoading, user } = useSelector(({ User }) => ({
    user: User.userData
  }));

  useLayoutEffect(() => {
    if (certificate) {
      const { name, value } = certificate.getCertificateByParams;
      setDiscount({ type: 'certificate', name, value });
      return setPrice(getTotalPriceWithCertificate(certificate));
    }
    if (promoCode) {
      const { code, discount } = promoCode.getPromoCodeByCode;
      setDiscount({ type: 'promoCode', name: code, value: discount });
      return setPrice(getTotalPricesWithPromoCode(promoCode));
    }
    setPrice(getTotalPrice());
  }, [
    items,
    currency,
    getTotalPrice,
    certificate,
    promoCode,
    getTotalPricesWithPromoCode,
    getTotalPriceWithCertificate
  ]);

  const totalSavePrice = (promoCode || certificate) && (
    <div className={styles.totalPrice}>
      <span>{t('cart.subtotal')}</span>
      <div>
        {currencySign}
        {promoCode && getTotalPrice() - getTotalPricesWithPromoCode(promoCode)}
        {certificate && getTotalPrice()}
      </div>
    </div>
  );

  const onGoToCheckout = async () => {
    const itemsFromConstructor = items.filter((item) => item.isFromConstructor);

    for (const item of itemsFromConstructor) {
      const input = {
        product: {
          name: item.name,
          model: item.model?._id,
          pattern: item.pattern?._id,
          mainMaterial: {
            material: item.basic._id,
            color: item.basic?.features.color._id
          },
          bottomMaterial: {
            material: item.bottom?._id,
            color: item.bottom?.features.color._id
          },
          sizes: [item.sizeAndPrice.size._id],
          basePrice: item.basePrice
        }
      };

      setProductFromConstructorLoading(true);

      const { data } = await addConstructorProduct({
        variables: {
          product: input.product
        }
      });

      setCartItem(item.id, {
        ...item,
        productId: data.addProductFromConstructor._id
      });
    }
    history.push(pathToCheckout);
  };

  if (cartLoading || productFromConstructorLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.root} data-cy='filled-cart'>
      <PathBack
        className={styles.pathBack}
        categoryLink={pathToCategory}
        categoryText='cart.pathBack.toCatalog'
        currentPageText='cart.pathBack.yourCart'
      />
      <div className={styles.orderWrapper}>
        <div className={styles.orderTable}>
          <OrderTable
            items={items}
            user={user}
            cartOperations={cartOperations}
            promoCode={promoCode}
            certificateData={certificate}
          />
        </div>
      </div>
      <div className={styles.promoAndTotalWrapper}>
        <CartDiscount
          discount={discount}
          setDiscount={setDiscount}
          cartOperations={cartOperations}
        />
        <div className={styles.totalWrapper}>
          {totalSavePrice}
          <div className={styles.totalPrice}>
            <span>{t('cart.totalPrice')}</span>
            <div>
              {currencySign}
              {price}
            </div>
          </div>
          <Button variant='contained' className={styles.ordersButton} onClick={onGoToCheckout}>
            {t('cart.checkout')}
          </Button>
          <Link to={pathToCategory}>
            <Button className={styles.shoppingButton}>{t('cart.continue')}</Button>
          </Link>
        </div>
      </div>
      <SimilarProducts cartList={items} />
    </div>
  );
};

export default FilledCart;
