import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import { useStyles } from './cabinet.styles';
import NotLoggedCabinet from '../not-logged-cabinet';
import LoggedCabinet from '../logged-cabinet';

const Cabinet = () => {
  const isLogged = true;
  const styles = useStyles({ logged: isLogged });

  return (
    <div className={styles.cabinet}>
      <PersonOutlineIcon />
      {isLogged ? <LoggedCabinet /> : <NotLoggedCabinet />}
    </div>
  );
};

export default Cabinet;
