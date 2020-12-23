import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = (props) => (
  <div>
    <ToastContainer {...props} />
  </div>
);

export default Toast;
