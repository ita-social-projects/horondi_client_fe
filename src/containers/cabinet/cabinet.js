import React, { useEffect } from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './cabinet.styles';
import NotLoggedCabinet from '../../components/not-logged-cabinet';
import LoggedCabinet from '../../components/logged-cabinet';
import { getWishlist } from '../../redux/wishlist/wishlist.actions';
import { setThemeMode } from '../../redux/theme/theme.actions';
import { setToLocalStorage } from '../../services/local-storage.service';
import { DARK_THEME, LIGHT_THEME } from '../../configs';

const Cabinet = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  const { userData, lightMode } = useSelector(({ User, Theme }) => ({
    userData: User.userData,
    lightMode: Theme.lightMode
  }));
  const styles = useStyles({ logged: !!userData });

  const changeTheme = (e) => {
    e.persist();
    if (e.type === 'keydown' && e.key !== 'Enter') {
      return;
    }
    dispatch(setThemeMode(!lightMode));
    setToLocalStorage('theme', !lightMode ? LIGHT_THEME : DARK_THEME);
  };

  return (
    <div className={styles.cabinet} data-cy='cabinet'>
      <PersonOutlineIcon tabIndex='0' />
      {userData ? (
        <LoggedCabinet onChangeTheme={changeTheme} />
      ) : (
        <NotLoggedCabinet onChangeTheme={changeTheme} />
      )}
    </div>
  );
};

export default Cabinet;
