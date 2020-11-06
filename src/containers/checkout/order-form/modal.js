import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import { useStyles } from '../checkout.styles';
import {
  CHECKOUT_BUTTON,
  CHECKOUT_TEXT_FIELDS
} from '../../../translations/checkout.translations';
import { getFondyUrl } from '../../../redux/checkout/checkout.actions';

const OrderFormModal = ({
  allFieldsValidated,
  shouldValidate,
  personalData
}) => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  const dispatch = useDispatch();
  const style = useStyles();
  const [open, setOpen] = useState(shouldValidate);

  useEffect(() => {
    shouldValidate && setOpen(true);
  }, [shouldValidate, allFieldsValidated]);

  useEffect(() => {
    shouldValidate && dispatch(getFondyUrl());
  }, [shouldValidate, dispatch]);

  const modalHTML = (
    <div className={style.orderFormModal}>
      <div className={style.modalTitle}>
        <h2>Order number: 100500</h2>
      </div>
      <div>
        <span className={style.modalSubTitle}>
          {CHECKOUT_TEXT_FIELDS[language].firstName}:{' '}
        </span>
        <span className={style.modalData}>
          {personalData.firstName} {personalData.lastName}
        </span>
      </div>
      <div>
        <span className={style.modalSubTitle}>
          {CHECKOUT_TEXT_FIELDS[language].contactPhoneNumber}:{' '}
        </span>
        <span className={style.modalData}>{personalData.phoneNumber}</span>
      </div>
      <div>
        <span className={style.modalSubTitle}>
          {CHECKOUT_TEXT_FIELDS[language].email}:{' '}
        </span>
        <span className={style.modalData}>{personalData.email}</span>
      </div>
      <div>
        <span className={style.modalSubTitle}>
          {CHECKOUT_TEXT_FIELDS[language].delivery}:{' '}
        </span>
        <span className={style.modalData}>{personalData.deliveryType}</span>
      </div>
      {personalData.city && (
        <div>
          <span className={style.modalSubTitle}>
            {CHECKOUT_TEXT_FIELDS[language].city}:{' '}
          </span>
          <span className={style.modalData}>{personalData.city}</span>
        </div>
      )}
      {personalData.departmentValue && (
        <div>
          <span className={style.modalSubTitle}>
            {CHECKOUT_TEXT_FIELDS[language].department}:{' '}
          </span>
          <span className={style.modalData}>
            {personalData.departmentValue}
          </span>
        </div>
      )}
      {personalData.streetValue && (
        <div>
          <span className={style.modalSubTitle}>
            {CHECKOUT_TEXT_FIELDS[language].street}:{' '}
          </span>
          <span className={style.modalData}>{personalData.streetValue}</span>
        </div>
      )}
      {personalData.buildValue && (
        <div>
          <span className={style.modalSubTitle}>
            {CHECKOUT_TEXT_FIELDS[language].building}:{' '}
          </span>
          <span className={style.modalData}>{personalData.buildValue}</span>
        </div>
      )}
      {personalData.apartmentValue && (
        <div>
          <span className={style.modalSubTitle}>
            {CHECKOUT_TEXT_FIELDS[language].apartment}:{' '}
          </span>
          <span className={style.modalData}>{personalData.apartmentValue}</span>
        </div>
      )}
      <div>
        <span className={style.modalSubTitle}>
          {CHECKOUT_TEXT_FIELDS[language].total}:{' '}
        </span>
        <span className={style.modalData}>{personalData.totalPrice}</span>
      </div>
      <div className={style.modalButtonsWrapper}>
        <Button
          className={style.btnModalCancel}
          variant='outlined'
          onClick={() => setOpen((prevState) => !prevState)}
        >
          {CHECKOUT_BUTTON[language].cancel}
        </Button>
        <Button
          className={style.btnModalConfirm}
          // onClick={() => setUrl(true)}
        >
          {CHECKOUT_BUTTON[language].confirm}
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal open={open} onClose={() => setOpen((prevState) => !prevState)}>
        {modalHTML}
      </Modal>
    </div>
  );
};

export default OrderFormModal;
