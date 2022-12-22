import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { useStyles } from './model-item.style';
import { IMG_URL, URL_QUERIES_NAME } from '../../configs';
import routes from '../../configs/routes';
import { ITEMS_PER_PAGE } from '../../pages/product-list-page/constants';

const ModelItem = ({ model, modelsUrl }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { pathToCategory } = routes;
  const countPerPageValue = ITEMS_PER_PAGE[0].value;

  return (
    <Link
      to={`${pathToCategory}?${modelsUrl}&${URL_QUERIES_NAME.countPerPage}=${countPerPageValue}&${URL_QUERIES_NAME.page}=${URL_QUERIES_NAME.defaultPage}`}
      className={styles.modelItem}
    >
      <h2 className={styles.modelItemTitle}>{t(`${model.translationsKey}.name`)}</h2>
      <div className={styles.modelItemImage}>
        <img src={IMG_URL + model.images.small} alt='model' />
      </div>
      <footer className={styles.link}>
        {t('home.moveTo').toUpperCase()} {t(`${model.translationsKey}.name`).toUpperCase()}
        <ArrowRightAltIcon className={styles.arrow} />
      </footer>
    </Link>
  );
};

export default ModelItem;
