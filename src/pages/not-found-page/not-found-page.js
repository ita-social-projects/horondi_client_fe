import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

import { useStyles } from './not-found-page.styles';

import routes from '../../const/routes';

import { NOT_FOUND_PAGE_IMAGES } from '../../configs';

const { pathToMain } = routes;

const NotFoundPage = () => {
  const styles = useStyles();

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const { t } = useTranslation();

  const imagePath = NOT_FOUND_PAGE_IMAGES.light || NOT_FOUND_PAGE_IMAGES.dark;

  return (
    <div className={styles.wrapper}>
      <div className={styles.error}>
        <div className={styles.info}>
          <h2>
            4
            <span className={styles.imageContainer}>
              <img className={styles.image} src={imagePath} alt={t('notFoundPage.message')} />
            </span>
            4
          </h2>
          <h3>{t('notFoundPage.message')}</h3>
          <p>
            {t('notFoundPage.toHome')}{' '}
            <Link data-cy='home' className={styles.link} to={pathToMain}>
              {t('notFoundPage.linkHome')}
            </Link>
          </p>
          <Button data-cy='back' className={styles.button} onClick={goBack} variant='contained'>
            {t('notFoundPage.linkBack')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
