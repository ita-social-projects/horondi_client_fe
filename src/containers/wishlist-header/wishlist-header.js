import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { useQuery } from '@apollo/client';
import { useStyles } from './wishlist-header.styles';
import { WISHLIST_KEY } from '../../configs';
import routes from '../../configs/routes';
import { getWishlistByUserId } from '../../pages/wishlist/operations/wishlist.queries';
import { getFromLocalStorage } from '../../services/local-storage.service';

const { pathToWishlist } = routes;

const WishlistHeader = () => {
  const user = getFromLocalStorage('accessToken');
  const styles = useStyles();
  const [wishlist, setWishlist] = useState();
  const localWishlist = getFromLocalStorage('wishlist');
  const { loading, data } = useQuery(getWishlistByUserId, { skip: !user });

  useEffect(() => {
    if (user) {
      if (!loading) {
        setWishlist(data.getWishlistByUserId.products.length);
      }
    } else {
      setWishlist(localWishlist.products.length);
    }
  }, [data, localWishlist]);

  return (
    <>
      <span className={styles.cartIconWrapper}>
        <Link to={pathToWishlist}>
          <IconButton className={styles.root} aria-label={WISHLIST_KEY} tabIndex={-1} disableRipple>
            <Badge badgeContent={wishlist} color='secondary' onClick>
              <FavoriteBorderOutlined className={styles.svg} />
            </Badge>
          </IconButton>
        </Link>
      </span>
    </>
  );
};

export default WishlistHeader;
