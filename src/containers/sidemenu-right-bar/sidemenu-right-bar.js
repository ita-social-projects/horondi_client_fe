import React from 'react';
import { MenuItem } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useStyles } from './sidemenu-right-bar.styles';

import Currency from '../currency';
import Language from '../language';
import CartHeader from '../cart-header';
import routes from '../../configs/routes';

const SidemenuRightBar = ({ fromSideBar, setIsMenuOpen }) => {
  const styles = useStyles({ fromSideBar });
  const dispatch = useDispatch();
  const { pathToWishlist } = routes;

  const handleWishlistClick = () => {
    setIsMenuOpen(false);
    return dispatch(push(pathToWishlist));
  };

  return (
    <div className={styles.root}>
      <div className={styles.wishlist}>
        <MenuItem>
          <FavoriteIcon onClick={handleWishlistClick} data-testid='wishlist-icon' />
        </MenuItem>
      </div>
      <div className={styles.cartHeader} onClick={() => setIsMenuOpen(false)}>
        <CartHeader fromSideBar={fromSideBar} />
      </div>
      <div className={styles.language}>
        <Language fromSideBar={fromSideBar} />
      </div>
      <div className={styles.currency}>
        <Currency fromSideBar={fromSideBar} />
      </div>
    </div>
  );
};

export default SidemenuRightBar;
