import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { useStyles } from './wishlist-header.styles';
import { setNewWishlist } from '../../redux/common-store/common.actions';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { WISHLIST_KEY } from '../../configs';
import routes from '../../configs/routes';

const { pathToWishlist } = routes;

const WishlistHeader = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const wishlistCounter = useSelector(({ CommonStore }) => CommonStore.wishlist.length);

  useEffect(() => {
    dispatch(setNewWishlist(getFromLocalStorage(WISHLIST_KEY)));
  }, []);

  return (
    <>
      <Link to={pathToWishlist}>
        <IconButton className={styles.root} aria-label={WISHLIST_KEY} tabIndex={-1} disableRipple>
          <Badge badgeContent={wishlistCounter} color='secondary'>
            <FavoriteBorderOutlined className={styles.svg} />
          </Badge>
        </IconButton>
      </Link>
    </>
  );
};

export default WishlistHeader;
