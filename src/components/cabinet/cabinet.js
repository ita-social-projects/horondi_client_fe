import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useSelector } from 'react-redux';
import { useStyles } from './cabinet.styles';
import NotLoggedCabinet from '../not-logged-cabinet';
import LoggedCabinet from '../logged-cabinet';

const Cabinet = () => {
  const { userData } = useSelector(({ User }) => ({
    userData: User.userData
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
