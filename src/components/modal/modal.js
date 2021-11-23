import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SimpleModal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import Popper from '@material-ui/core/Popper';
import { useStyles } from './modal.styles';

const Modal = ({
  message,
  itemName = [],
  onAction,
  isOpen,
  isCartModal = false,
  isEmpty = false,
  isFullscreen = false,
  content,
  anchorEl
}) => {
  const [open, setOpen] = useState(isOpen);
  const { t } = useTranslation();
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
        <Button onClick={() => handleClose(null, null, true)} variant='contained'>
          {t('common.buttons.confirm')}
        </Button>
        <Button onClick={handleClose} variant='contained'>
          {t('common.buttons.cancel')}
        </Button>
      </div>
    </div>
  );

  const emptyBody = (
    <div
      className={isFullscreen ? `${styles.paper} ${styles.fullscreen}` : styles.paper}
      data-cy='removing-modal'
    >
      <Button onClick={handleClose} variant='contained'>
        {t('common.buttons.cancel')}
      </Button>
      {content}
    </div>
  );

  return (
    <div>
      <Popper
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <SimpleModal open={open}>{isEmpty ? emptyBody : body}</SimpleModal>
      </Popper>
    </div>
  );
};

export default Modal;
