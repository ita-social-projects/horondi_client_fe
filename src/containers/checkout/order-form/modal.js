import React, { useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { useStyles } from '../checkout.styles';

const OrderFormModal = ({ allFieldsValidated, shouldValidate }) => {
  const style = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    shouldValidate && handleOpen(true);
  }, [shouldValidate, allFieldsValidated]);

  const body = (
    <div className={style.orderFormModal}>
      <h2 id='simple-modal-title'>Text in a modal</h2>
      <p id='simple-modal-description'>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <OrderFormModal />
    </div>
  );

  return (
    <div>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
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
