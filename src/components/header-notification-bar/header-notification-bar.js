import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './header-notification-bar.styles';

const HeaderNotificationBar = ({ closeNotificationBar, children }) => {
  const styles = useStyles();
  const handleClose = () => {
    closeNotificationBar(null);
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {children}
        <CloseIcon
          className={styles.closeIcon}
          onClick={handleClose}
          alt='close notification'
          data-testid='closeNotification'
        />
      </div>
    </div>
  );
};

export default HeaderNotificationBar;
