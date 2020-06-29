import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import { useStyles } from './Cabinet.styles';
import NotLoggedCabinet from '../NotLoggedCabinet';
import LoggedCabinet from '../LoggedCabinet';

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
