import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';
import Modal from '../../../components/modal';
import routes from '../../../configs/routes';
import { useStyles } from './filled-certificates.styles';
import CertificateTable from '../certificate-table';
import OrderHistoryPagination from '../../orders/order-history/order-history-pagination';
import ModalGiftCertificate from '../../modal-gift-certificate/modal-gift-certificate';

const FilledCertificates = ({ items, count, pagination }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [chosenItem, setChosenItem] = useState(null);
  const styles = useStyles();
  const { t } = useTranslation();

  const { pathToGiftСertificate } = routes;

  const openModal = (item) => {
    setModalVisibility(true);
    setChosenItem(item);
  };

  return (
    <>
      <div className={styles.root} data-cy='filled-certificates'>
        <div className={styles.totalWrapper}>
          <div className={styles.certificateTable}>
            <CertificateTable items={items} openModal={openModal} />
          </div>
          {count > 5 && <OrderHistoryPagination data={pagination} />}
        </div>
        <div>
          <div className={styles.buttonWrapper}>
            <Link to={pathToGiftСertificate}>
              <Button className={styles.buyButton}>{t('certificate.buy')}</Button>
            </Link>
            {modalVisibility && (
              <Modal isOpen={modalVisibility} setModalVisibility={setModalVisibility}>
                <ModalGiftCertificate item={chosenItem} setModalVisibility={setModalVisibility} />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilledCertificates;
