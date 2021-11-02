import React, { createContext, useState } from 'react';
import { SNACKBAR_TYPES } from '../../configs';

export const SnackBarContext = createContext({ state: '', changeState: () => {} });

export const SnackBarContextProvider = (props) => {
  const [state, setState] = useState({ message: '', severity: '' });
  const setMessage = (message, severity = SNACKBAR_TYPES.success) =>
    setState({ message, severity });
  const close = () => setState((prev) => ({ message: '', severity: prev.severity }));
  const initState = {
    state,
    setMessage,
    close
  };

  return <SnackBarContext.Provider value={initState}>{props.children}</SnackBarContext.Provider>;
};
