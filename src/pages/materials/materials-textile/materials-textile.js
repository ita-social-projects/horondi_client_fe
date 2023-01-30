import React from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import { useStyles } from './materials-textile.style';
import { IMG_URL } from '../../../configs/index';

const MaterialsTextile = ({ materialsTextile }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const materialsTextileItems = materialsTextile.map((item) => (
    <div key={item._id} className={styles.container}>
      <img className={styles.image} src={`${IMG_URL}${item.image.medium}`} alt='' />
      <div className={styles.content}>
        <h3>{item.title}</h3>
        {parse(t(`${item.translationsKey}.text`))}
      </div>
    </div>
  ));

  return (
    <>
      {materialsTextile.length > 0 && <h2>{t('materialsPage.mainTextile')}</h2>}
      {materialsTextileItems}
    </>
  );
};

export default MaterialsTextile;
