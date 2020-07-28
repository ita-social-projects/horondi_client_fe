import React, { useState } from 'react';
import SimpleModal from '@material-ui/core/Modal';

import { MODAL_BUTTONS } from '../../translations/modal.translations';
import { useStyles } from './modal.styles';

const Modal = ({ message, itemName, onAction, isOpen, language }) => {
  const styles = useStyles();
  const [open, setOpen] = useState(isOpen);

  console.log(message);

  const handleClose = (action) => {
    action ? onAction(true) : onAction(false);
    setOpen(false);
  };

  const body = (
    <div className={styles.paper}>
      <h2 id='simple-modal-title'>Text in a modal</h2>
      <p id='simple-modal-description'>{message + itemName}?</p>
      {/* <div style={styles.buttonGroup}>
        <button type='button' onClick={() => handleClose(true)}>
          {MODAL_BUTTONS[language].confirm}
        </button>
        <button type='button' onClick={() => handleClose(false)}>
          {MODAL_BUTTONS[language].cancel}
        </button>
      </div> */}
    </div>
  );

  return (
    <div>
      <SimpleModal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </SimpleModal>
    </div>
  );
};

export default Modal;
