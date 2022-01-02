import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useStyles } from './toast.styles';

const Toast = () => {
  const styles = useStyles();

  return (
    <ToastContainer
      hideProgressBar
      className={styles.root}
      limit={2}
      newestOnTop
      pauseOnHover
    />
  );
};

export default Toast;
