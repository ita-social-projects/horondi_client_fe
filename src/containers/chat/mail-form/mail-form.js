import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import ActiveMessenger from '../active-messenger';
import { useStyles } from '../chat.style';

export const MailForm = ({ cancelIconHandler, iconsVisible, mailFormVisible }) => {
  const style = useStyles({ iconsVisible, mailFormVisible });

  return (
    <div className={style.mailForm}>
      <div className={style.cancelIcon} onClick={cancelIconHandler}>
        <CancelIcon />
      </div>
      <ActiveMessenger iconsVisible={iconsVisible} mailFormVisible={mailFormVisible} />
    </div>
  );
};
