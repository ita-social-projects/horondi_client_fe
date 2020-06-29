import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import { useStyles } from './cabinet.styles';
import NotLoggedCabinet from '../not-logged-cabinet';
import LoggedCabinet from '../logged-cabinet';

const Cabinet = () => {
  const isLogged = false;
  const props = {
    logged: isLogged
  };

  const styles = useStyles(props);

  return (
    <div className={styles.cabinet}>
      <PersonOutlineIcon />
      {isLogged ? <LoggedCabinet /> : <NotLoggedCabinet />}
    </div>
  );
};

export default Cabinet;

