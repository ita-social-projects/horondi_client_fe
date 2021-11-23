import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SimpleModal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './modal.styles';

const Modal = ({
  message,
  onAction,
  isOpen,
  isEmpty = false,
  isFullscreen = false,
  content,
  anchorEl
}) => {
  const [open, setOpen] = useState(isOpen);
  const { t } = useTranslation();
  const styles = useStyles();

  const handleClose = (action) => {
    onAction(!!action);
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
      <p>{message}</p>
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
      <Button onClick={handleClose} variant='contained'>
        {t('common.buttons.cancel')}
      </Button>
      {content}
    </div>
  );

  return (
    <div>
      <SimpleModal
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {isEmpty ? emptyBody : body}
      </SimpleModal>
    </div>
  );
};

export default Modal;
