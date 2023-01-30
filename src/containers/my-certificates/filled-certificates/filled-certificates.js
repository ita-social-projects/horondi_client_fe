import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Modal from '../../../components/modal';
import routes from '../../../configs/routes';
import { useStyles } from './filled-certificates.styles';
import CertificateTable from '../certificate-table';
import OrderHistoryPagination from '../../orders/order-history/order-history-pagination';
import ModalGiftCertificate from '../../modal-gift-certificate/modal-gift-certificate';
import ModalSuccessfulGift from '../../modal-successful-gift/modal-successful-gift';
import AuthFormButton from '../../../components/auth-form/auth-form-button/auth-form-button';

const FilledCertificates = ({ items, count, pagination, onCertificateGift }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [email, setEmail] = useState('');
  const [chosenItem, setChosenItem] = useState(null);
  const styles = useStyles();
  const { t } = useTranslation();

  const { pathToGiftСertificate } = routes;

  const openModal = (item) => {
    setModalVisibility(true);
    setChosenItem(item);
  };

  const handleCertificateGift = (email) => {
    setEmail(email);
    setModalVisibility(false);
    setIsComplete(true);
  };

  const closeSuccesModal = () => {
    onCertificateGift();
    setIsComplete(false);
  };

  return (
    <div className={styles.root} data-cy='filled-certificates'>
      <div className={styles.certificateTable}>
        <CertificateTable items={items} openModal={openModal} />
      </div>
      {count > 5 && <OrderHistoryPagination data={pagination} />}
      <Link to={pathToGiftСertificate} className={styles.buttonWrapper}>
        <AuthFormButton className={styles.buyButton}>{t('certificate.buy')}</AuthFormButton>
      </Link>
      {modalVisibility && (
        <Modal isOpen={modalVisibility} setModalVisibility={setModalVisibility}>
          <ModalGiftCertificate
            item={chosenItem}
            handleCertificateGift={handleCertificateGift}
            setModalVisibility={setModalVisibility}
          />
        </Modal>
      )}
      {isComplete && (
        <Modal isOpen={isComplete} setModalVisibility={closeSuccesModal}>
          <ModalSuccessfulGift email={email} closeSuccesModal={closeSuccesModal} />
        </Modal>
      )}
    </div>
  );
};

export default FilledCertificates;
