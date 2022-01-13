import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { useStyles } from './model-item.style';

import { IMG_URL } from '../../configs';

const ModelItem = ({ model, modelsUrl }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <Link to={`/catalog/${model.category.name[1].value}?${modelsUrl}`} className={styles.modelItem}>
      <div className={styles.modelItemTitle}>{t(`${model.translationsKey}.name`)}</div>
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
