import React, { useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import { useStyles } from '../../../checkout.styles';
import {
  CHECKOUT_BUTTON,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_TITLES
} from '../../../../../translations/checkout.translations';

const OrderFormModal = ({
  allFieldsValidated,
  shouldValidate,
  personalData,
  fondyData,
  openModal,
  setOpenModal
}) => {
  const { language, fondy } = useSelector(({ Language, Checkout }) => ({
    language: Language.language,
    fondy: Checkout.fondyData
  }));

  const style = useStyles();

  useEffect(() => {
    shouldValidate && allFieldsValidated && setOpenModal(true);
  }, [shouldValidate, allFieldsValidated, setOpenModal]);

  const modalHTML = (
    <div className={style.orderFormModal}>
      <div className={style.modalTitle}>
        <span className={style.modalOrderTitle}>
          {CHECKOUT_TITLES[language].orderNumber}
        </span>
        <span className={style.modalOrderSubTitle}>{fondyData.orderID}</span>
      </div>
      <div>
        <span className={style.modalSubTitle}>
          {`${CHECKOUT_TEXT_FIELDS[language].firstName}: `}
        </span>
        <span className={style.modalData}>
          {personalData.firstName} {personalData.lastName}
        </span>
      </div>
      <div>
        <span className={style.modalSubTitle}>
          {CHECKOUT_TEXT_FIELDS[language].contactPhoneNumber}
        </span>
        <span className={style.modalData}>{personalData.phoneNumber}</span>
      </div>
      <div>
        <span className={style.modalSubTitle}>
          {`${CHECKOUT_TEXT_FIELDS[language].email}: `}
        </span>
        <span className={style.modalData}>{personalData.email}</span>
      </div>
      <div>
        <span className={style.modalSubTitle}>
          {`${CHECKOUT_TEXT_FIELDS[language].delivery}: `}
        </span>
        <span className={style.modalData}>{personalData.deliveryType}</span>
      </div>
      {personalData.city && (
        <div>
          <span className={style.modalSubTitle}>
            {`${CHECKOUT_TEXT_FIELDS[language].city}: `}
          </span>
          <span className={style.modalData}>{personalData.city}</span>
        </div>
      )}
      {personalData.departmentValue && (
        <div>
          <span className={style.modalSubTitle}>
            {`${CHECKOUT_TEXT_FIELDS[language].department}: `}
          </span>
          <span className={style.modalData}>
            {personalData.departmentValue}
          </span>
        </div>
      )}
      {personalData.streetValue && (
        <div>
          <span className={style.modalSubTitle}>
            {`${CHECKOUT_TEXT_FIELDS[language].street}: `}
          </span>
          <span className={style.modalData}>{personalData.streetValue}</span>
        </div>
      )}
      {personalData.buildValue && (
        <div>
          <span className={style.modalSubTitle}>
            {`${CHECKOUT_TEXT_FIELDS[language].building}: `}
          </span>
          <span className={style.modalData}>{personalData.buildValue}</span>
        </div>
      )}
      {personalData.apartmentValue && (
        <div>
          <span className={style.modalSubTitle}>
            {`${CHECKOUT_TEXT_FIELDS[language].apartment}: `}
          </span>
          <span className={style.modalData}>{personalData.apartmentValue}</span>
        </div>
      )}
      <div>
        <span className={style.modalSubTitle}>
          {`${CHECKOUT_TEXT_FIELDS[language].total}: `}
        </span>
        <span className={style.modalData}>{personalData.totalPrice}</span>
      </div>
      <div className={style.modalButtonsWrapper}>
        <Button
          className={style.btnModalCancel}
          variant='outlined'
          onClick={() => setOpenModal((prevState) => !prevState)}
        >
          {CHECKOUT_BUTTON[language].cancel}
        </Button>
        {personalData.paymentType === 'card' ? (
          <Button className={style.btnModalLink} href={fondy.checkoutUrl}>
            {CHECKOUT_BUTTON[language].pay}
          </Button>
        ) : (
          <Button
            className={style.btnModalConfirm}
            onClick={() => setOpenModal(false)}
          >
            {CHECKOUT_BUTTON[language].confirm}
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal((prevState) => !prevState)}
      >
        {modalHTML}
      </Modal>
    </div>
  );
};

export default OrderFormModal;
