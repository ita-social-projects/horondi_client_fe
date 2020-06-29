import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import { useStyles } from './Cabinet.styles';
import NotLoggedCabinet from '../NotLoggedCabinet';
import LoggedCabinet from '../LoggedCabinet';

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
