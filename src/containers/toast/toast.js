import React, { forwardRef } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useStyles } from './toast.styles';

const AlertFunction = (props, alertRef) => (
  <MuiAlert elevation={6} ref={alertRef} variant='filled' {...props} />
);

export const Alert = forwardRef(AlertFunction);

export default function Toast({ isOpenedSnackbar, setIsOpenedSnackbar, message }) {
  const styles = useStyles();

  const handleCloseSnackbar = () => {
    setIsOpenedSnackbar(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isOpenedSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        className={styles.root}
      >
        <Alert onClose={handleCloseSnackbar} severity='success' sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
