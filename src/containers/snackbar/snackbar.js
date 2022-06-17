import React, { useContext } from 'react';
import BaseSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { SnackBarContext } from '../../context/snackbar-context';

const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

const Snackbar = () => {
  const { closeSnackBar } = useContext(SnackBarContext);

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    closeSnackBar();
  };

  return (
    <SnackBarContext.Consumer>
      {({ snackBarState }) => (
        <BaseSnackbar
          id='snack-bar'
          open={!!snackBarState.message}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={snackBarState.severity}>
            {snackBarState.message}
          </Alert>
        </BaseSnackbar>
      )}
    </SnackBarContext.Consumer>
  );
};

export default Snackbar;
