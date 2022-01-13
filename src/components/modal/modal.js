import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal as MuiModal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './modal.styles';

const Modal = ({
  message,
  itemName = '',
  onAction,
  isOpen,
  isEmpty = false,
  isFullscreen = false,
  content
}) => {
  const [open, setOpen] = useState(isOpen);
  const { t } = useTranslation();
  const styles = useStyles();

  const handleClose = (action) => {
    onAction(action);
    setOpen(false);
  };

  const body = (
    <div className={styles.paper} data-cy='removing-modal'>
      <div className={styles.header}>
        <span>{t('common.modalHeader')}</span>
        <CloseIcon
          className={styles.closeIcon}
          onClick={() => handleClose(false)}
          alt='closeModalIcon'
          data-testid='closeModalIcon'
        />
      </div>
      <p>
        {message} {itemName}
      </p>
      <div className={styles.buttonGroup}>
        <Button onClick={() => handleClose(true)} variant='contained'>
          {t('common.buttons.confirm')}
        </Button>
        <Button onClick={() => handleClose(false)} variant='contained'>
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
      <Button onClick={() => handleClose(false)} variant='contained'>
        {t('common.buttons.cancel')}
      </Button>
      {content}
    </div>
  );

  return (
    <div>
      <MuiModal
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {isEmpty ? emptyBody : body}
      </MuiModal>
    </div>
  );
};

export default Modal;
