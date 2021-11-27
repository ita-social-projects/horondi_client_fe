import React, { createContext, useState } from 'react';
import { SNACKBAR_TYPES } from './constants';

export const SnackBarContext = createContext({ state: '', changeState: () => null });

export const SnackBarContextProvider = (props) => {
  const [snackBarState, setSnackBarState] = useState({ message: '', severity: '' });
  const setSnackBarMessage = (message, severity = SNACKBAR_TYPES.success) =>
    setSnackBarState({ message, severity });
  const closeSnackBar = () =>
    setSnackBarState((prev) => ({ message: '', severity: prev.severity }));
  const initState = {
    snackBarState,
    setSnackBarMessage,
    closeSnackBar
  };

  return <SnackBarContext.Provider value={initState}>{props.children}</SnackBarContext.Provider>;
};
