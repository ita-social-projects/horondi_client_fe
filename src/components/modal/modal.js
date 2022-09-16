import React, { useState } from 'react';
import { Modal as MuiModal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './modal.styles';

const Modal = ({ isOpen, children, setModalVisibility }) => {
  const [open, setOpen] = useState(isOpen);
  const styles = useStyles();

  const handleClose = () => {
    setOpen(false);
    setModalVisibility(false);
  };

  return (
    <MuiModal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <div className={styles.paper} data-cy='removing-modal'>
        <CloseIcon
          className={styles.closeIcon}
          onClick={handleClose}
          alt='closeModalIcon'
          data-testid='closeModalIcon'
        />
        {children}
      </div>
    </MuiModal>
  );
};

export default Modal;
