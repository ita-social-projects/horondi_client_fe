import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';

import { useStyles } from './not-found-page.styles';
import {
  LINK_BACK,
  NOT_FOUND_PAGE_MESSAGE,
  TO_HOMEPAGE_MESSAGE,
  LINK_TO_HOMEPAGE
} from '../../translations/not-found-page.translations';

import { NOT_FOUND_PAGE_IMAGES } from '../../configs';

import routes from '../../const/routes';

const { pathToMain } = routes;

const NotFoundPage = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const { language, isLightTheme } = useSelector(({ Language, Theme }) => ({
    language: Language.language,
    isLightTheme: Theme.lightMode
  }));

  const imagePath = isLightTheme ? NOT_FOUND_PAGE_IMAGES.light : NOT_FOUND_PAGE_IMAGES.dark;

  return (
    <div className={styles.wrapper}>
      <div className={styles.error}>
        <div className={styles.info}>
          <h2>
            4
            <span className={styles.imageContainer}>
              <img
                className={styles.image}
                src={imagePath}
                alt={NOT_FOUND_PAGE_MESSAGE[language].value}
              />
            </span>
            4
          </h2>
          <h3>{NOT_FOUND_PAGE_MESSAGE[language].value}</h3>
          <p>
            {TO_HOMEPAGE_MESSAGE[language].value}{' '}
            <Link className={styles.link} to={pathToMain}>
              {LINK_TO_HOMEPAGE[language].value}
            </Link>
          </p>
          <Button className={styles.button} onClick={goBack} variant='contained'>
            {LINK_BACK[language].value}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
