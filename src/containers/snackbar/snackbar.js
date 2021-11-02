import React, { useContext } from 'react';
import i18n from 'i18next';

import BaseSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { SnackBarContext } from './snackbar-context';

const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

const Snackbar = () => {
  const snackbar = useContext(SnackBarContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    snackbar.close();
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
