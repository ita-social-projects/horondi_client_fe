import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/styles';

import { useStyles } from './empty-order.styles';
import { CART_AND_WISHLIST_IMAGES } from '../../../../configs';
import routes from '../../../../configs/routes';
import PathBack from '../../cart/path-back/path-back';

const { pathToCategory } = routes;

const EmptyOrder = ({ emptyTitle, buttonTitle, name }) => {
  const styles = useStyles();
  const { palette } = useTheme();

  const isLightTheme = palette.type === 'light';

  const emptyOrderImgLink = isLightTheme
    ? CART_AND_WISHLIST_IMAGES.lightTheme
    : CART_AND_WISHLIST_IMAGES.darkTheme;

  return (
    <>
      <PathBack />
      <div className={styles.root} data-cy={name}>
        <Typography className={styles.title} variant='h2'>
          {emptyTitle}
        </Typography>
        <img className={styles.image} src={emptyOrderImgLink} alt={name} />
        <Link to={pathToCategory}>
          <Button className={styles.button} variant='contained'>
            {buttonTitle}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EmptyOrder;
