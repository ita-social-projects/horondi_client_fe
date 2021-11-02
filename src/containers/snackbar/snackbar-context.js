import React, { createContext, useState } from 'react';

export const SnackBarContext = createContext({ state: '', changeState: () => {} });

export const SnackBarContextProvider = (props) => {
  const [state, setState] = useState({ message: ['hey'], severity: 'success' });
  const changeState = (state) => setState({ message: state.message, severity: state.severity });

  const initState = {
    state,
    changeState
  };

  return <SnackBarContext.Provider value={initState}>{props.children}</SnackBarContext.Provider>;
};
