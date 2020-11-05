import React, { useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { useStyles } from '../checkout.styles';

const OrderFormModal = ({
  allFieldsValidated,
  shouldValidate,
  personalData
}) => {
  const style = useStyles();

  const [open, setOpen] = React.useState(shouldValidate);

  allFieldsValidated && shouldValidate && setOpen(true);

  console.log('shouldValidate', shouldValidate);
  console.log('allFieldsValidated', allFieldsValidated);
  console.log('personalData', personalData);
  console.log('open', open);

  useEffect(() => {
    shouldValidate && allFieldsValidated && setOpen(shouldValidate);
  }, [shouldValidate, allFieldsValidated]);

  const body = (
    <div className={style.orderFormModal}>
      <h2>Order number: 100500</h2>
      <span>Customer:</span>
      <span>{}</span>
      <OrderFormModal />
    </div>
  );

  return (
    <div>
      {open && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
        >
          {body}
        </Modal>
      )}
    </div>
  );
};
export default OrderFormModal;
