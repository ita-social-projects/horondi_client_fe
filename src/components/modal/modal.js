import React, { useState } from 'react';
import SimpleModal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import Popper from '@material-ui/core/Popper';
import { MODAL_BUTTONS } from '../../translations/modal.translations';
import { useStyles } from './modal.styles';

const Modal = ({ message, itemName = [], onAction, isOpen, language, isCartModal = false }) => {
  const [open, setOpen] = useState(isOpen);
  const styles = useStyles();

  const handleClose = (_, __, action) => {
    action ? onAction(true) : onAction(false);
    setOpen(false);
  };

  const body = (
    <div className={styles.paper} data-cy='removing-modal'>
      <p>
        {message}
        <br />
        {isCartModal ? null : <b>{itemName}</b>}
      </p>
      <div className={styles.buttonGroup}>
        <Button onClick={handleClose} variant='contained'>
          {MODAL_BUTTONS[language].cancel}
        </Button>
        <Button onClick={() => handleClose(null, null, true)} variant='contained'>
          {MODAL_BUTTONS[language].confirm}
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Popper
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <SimpleModal open={open}>{body}</SimpleModal>
      </Popper>
    </div>
  );
};

export default Modal;
