import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import CertificateTable from '../certificate-table';
import { useStyles } from './filled-certificates.styles';
import { Loader } from '../../../components/loader/loader';
import routes from '../../../configs/routes';

const FilledCertificates = ({ items }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { pathToCategory, pathToCheckout } = routes;

  const { cartLoading, user } = useSelector(({ Currency, Cart, User, NewCart }) => ({
    currency: Currency.currency,
    cartList: Cart.list,
    cartLoading: Cart.loading,
    newCartList: NewCart.list,
    cartQuantityLoading: Cart.quantityLoading,
    user: User.userData
  }));

  if (cartLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className={styles.root} data-cy='filled-certificates'>
        <div className={styles.totalWrapper}>
          <div className={styles.certificateTable}>
            <CertificateTable items={items} user={user} />
          </div>
        </div>
        <div>
          <div className={styles.buttonWrapper}>
            <Link to={pathToCategory}>
              <Button className={styles.buyButton}>{t('certificate.buy')}</Button>
            </Link>
            <Link to={pathToCheckout}>
              <Button className={styles.addButton}>{t('certificate.add')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilledCertificates;