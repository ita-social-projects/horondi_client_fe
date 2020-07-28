import React, { useEffect } from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useDispatch } from 'react-redux';

import { useStyles } from './cabinet.styles';
import NotLoggedCabinet from '../../components/not-logged-cabinet';
import LoggedCabinet from '../../components/logged-cabinet';
import { getWishlist } from '../../redux/wishlist/wishlist.actions';

const Cabinet = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

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
