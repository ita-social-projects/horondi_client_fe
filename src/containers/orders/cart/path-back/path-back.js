import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import routes from '../../../../const/routes';
import { useStyles } from './path-back.styles';
import { CART_BUTTON_TITLES } from '../../../../translations/cart.translations';

const { pathToCategory, pathToMain } = routes;

const PathBack = () => {
  const styles = useStyles();
  const { isLightTheme, language } = useSelector(({ Theme, Language }) => ({
    isLightTheme: Theme.lightMode,
    language: Language.language
  }));

  return (
    <div className={isLightTheme ? styles.whiteThemePath : styles.darkThemePath}>
      <div className={styles.pathLine}>
        <Link to={pathToMain}>{CART_BUTTON_TITLES[language].pathToMain}</Link> /{' '}
        <Link to={pathToCategory}>{CART_BUTTON_TITLES[language].pathToCatalog}</Link> /{' '}
        {CART_BUTTON_TITLES[language].yourCart}
      </div>
    </div>
  );
};

export default PathBack;
