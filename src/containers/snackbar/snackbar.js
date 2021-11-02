import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18n from 'i18next';

import BaseSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { SnackBarContext } from './snackbar-context';

import { setSnackBarStatus } from '../../redux/snackbar/snackbar.actions';

const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

const Snackbar = () => {
  const dispatch = useDispatch();
  const state = useContext(SnackBarContext);

  const { snackBarStatus, snackBarSeverity, snackBarMessage, language } = useSelector(
    ({ Snackbar: snackbar, Language }) => ({
      snackBarStatus: snackbar.snackBarStatus,
      snackBarSeverity: snackbar.snackBarSeverity,
      snackBarMessage: snackbar.snackBarMessage,
      language: Language.language
    })
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    state.changeState({ message: '', severity: '' });
    // dispatch(setSnackBarStatus(false));
    dispatch(setSnackBarStatus(false));
  };

  return (
    <SnackBarContext.Consumer>
      {({ state }) => (
        <BaseSnackbar
          id='snack-bar'
          open={state.message}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={state.severity}>
            {state.message[i18n.language === 'ua' ? 0 : 1]}
          </Alert>
        </BaseSnackbar>
      )}
    </SnackBarContext.Consumer>
  );
};

export default Snackbar;
