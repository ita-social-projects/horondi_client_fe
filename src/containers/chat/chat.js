import React, { useState } from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Transition, config, animated } from 'react-spring';
import { useStyles } from './chat.style';
import MailForm from './mail-form';
import { showIcon } from './helperFunc';

export const Chat = () => {
  const [iconsVisible, setIconsVisible] = useState(false);
  const [mailFormVisible, setMailFormVisible] = useState(false);
  const style = useStyles({ iconsVisible, mailFormVisible });
  const cancelIconHandler = () => setMailFormVisible(!mailFormVisible);

  const chatButtonHandler = () => {
    setMailFormVisible(false);
    setIconsVisible(!iconsVisible);
    showIcon();
  };

  return (
    <div className={style.iconsMessengers}>
      {iconsVisible && (
        <>
          <div
            className={mailFormVisible ? `${style.msgIcon} ${style.msgIconActive}` : style.msgIcon}
            onClick={() => setMailFormVisible(!mailFormVisible)}
            data-testid='messengerBtn'
          >
            <MailOutlineIcon data-testid='mailIconBtn' className={style.icon} />
          </div>
          <Transition
            initial={null}
            items={mailFormVisible}
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 0 }}
            leave={{ opacity: 0, height: 0 }}
            config={config.gentle}
          >
            {(styles, item) =>
              item && (
                <animated.div style={styles}>
                  <MailForm
                    cancelIconHandler={cancelIconHandler}
                    iconsVisible={iconsVisible}
                    mailFormVisible={mailFormVisible}
                  />
                </animated.div>
              )
            }
          </Transition>
        </>
      )}
      <button data-testid='chatBtn' onClick={chatButtonHandler} className={style.msgIcon}>
        <ForumIcon className={style.icon} style={{ fontSize: 40 }} />
      </button>
    </div>
  );
};
