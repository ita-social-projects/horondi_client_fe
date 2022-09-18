import React, { useState } from 'react';
import { Button, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './confirm-dialog.styles';

const ConfirmDialog = ({
  onAction,
  isOpen,
  message,
  title,
  confirmButtonText,
  dismisButtonText
}) => {
  const [open, setOpen] = useState(isOpen);
  const styles = useStyles();

  const handleClose = (action) => {
    onAction(action);
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <div className={styles.paper}>
        <div className={styles.header}>
          <span>{title}</span>
          <CloseIcon
            className={styles.closeIcon}
            onClick={() => handleClose(false)}
            alt='closeModalIcon'
            data-testid='closeModalIcon'
          />
        </div>
        <p>{message}</p>
        <div className={styles.buttonGroup}>
          <Button onClick={() => handleClose(true)} variant='contained'>
            {confirmButtonText}
          </Button>
          <Button onClick={() => handleClose(false)} variant='contained'>
            {dismisButtonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
