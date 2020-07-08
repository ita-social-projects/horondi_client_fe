import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useSelector } from 'react-redux';
import { useStyles } from './Cabinet.styles';
import NotLoggedCabinet from '../NotLoggedCabinet';
import LoggedCabinet from '../LoggedCabinet';

const Cabinet = () => {
  const { userData } = useSelector((state) => ({
    userData: state.User.userData
  }));
  const styles = useStyles({ logged: !!userData });

  return (
    <div className={styles.cabinet}>
      <PersonOutlineIcon />
      {userData ? <LoggedCabinet /> : <NotLoggedCabinet />}
    </div>
  );
};

export default Cabinet;
