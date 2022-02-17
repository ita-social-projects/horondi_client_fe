import React, { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AlertFunction = (props, alertRef) => (
  <MuiAlert elevation={6} ref={alertRef} variant='filled' {...props} />
);

export const Alert = forwardRef(AlertFunction);

export default function Toast({ isOpenedSnackbar, setIsOpenedSnackbar, message }) {
  const handleCloseSnackbar = () => {
    setIsOpenedSnackbar(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isOpenedSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        style={{ marginTop: '85px' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity='success'
          sx={{ width: '100%' }}
          style={{ backgroundColor: '#08BE05' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
