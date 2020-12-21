import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useSelector, useDispatch } from 'react-redux';
import { setPopupStatus } from '../../redux/popup/popup.actions';

const Popup = () => {
  const dispatch = useDispatch();

  const popupStatus = useSelector((state) => state.Popup.popupStatus);
  const popupMessage = useSelector((state) => state.Popup.popupMessage);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setPopupStatus(false));
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={popupStatus}
        autoHideDuration={2000}
        onClose={handleClose}
        message={popupMessage}
        action={
          <>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={handleClose}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

export default Popup;
