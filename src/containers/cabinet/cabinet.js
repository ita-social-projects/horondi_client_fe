import React, { useEffect } from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './cabinet.styles';
import NotLoggedCabinet from '../../components/not-logged-cabinet';
import LoggedCabinet from '../../components/logged-cabinet';
import { getWishlist } from '../../redux/wishlist/wishlist.actions';

const Cabinet = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

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
