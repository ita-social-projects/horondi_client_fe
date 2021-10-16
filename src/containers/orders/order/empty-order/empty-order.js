import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStyles } from './empty-order.styles';
import { CART_IMAGES } from '../../../../configs';
import routes from '../../../../const/routes';
import PathBack from '../../cart/path-back/path-back';
import ThemeContext from '../../../../context/theme-context';

const { pathToCategory } = routes;

const EmptyOrder = ({ title, buttonTitle, name }) => {
  const styles = useStyles();
  const isLightTheme = useContext(ThemeContext);

  const emptyOrderImgLink = isLightTheme ? CART_IMAGES.lightTheme : CART_IMAGES.darkTheme;

  return (
    <>
      <PathBack />
      <div className={styles.root} data-cy={name}>
        <Typography
          className={isLightTheme ? styles.whiteThemeTitle : styles.darkThemeTitle}
          variant='h2'
        >
          {title}
        </Typography>
        <img className={styles.image} src={emptyOrderImgLink} alt={name} />
        <Link to={pathToCategory}>
          <Button
            className={isLightTheme ? styles.whiteThemeButton : styles.darkThemeButton}
            variant='contained'
          >
            {buttonTitle}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EmptyOrder;
