import React from 'react';

import { ToastContainer } from 'react-toastify';

import { useSelector } from 'react-redux';

const Toast = () => {
  const toastSettings = useSelector((state) => state.Toast.toastSettings);

  return <ToastContainer {...toastSettings} />;
};

export default Toast;
