import React from 'react';

import { ToastContainer } from 'react-toastify';

import { useSelector } from 'react-redux';
import { selectToastSettings } from '../../redux/selectors/multiple.selectors';

const Toast = () => {
  const toastSettings = useSelector(selectToastSettings);

  return <ToastContainer {...toastSettings} />;
};

export default Toast;
