import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './materials-textile.style';

const MaterialsTextile = ({ materialsTextile }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const materialsTextileItems = materialsTextile.map((item) => (
    <div key={item._id} className={styles.container}>
      <img className={styles.image} src={item.image} alt='' />
      <div className={styles.content}>
        <h3>{item.title}</h3>
        <p>{t(`${item.translationsKey}.text`)}</p>
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
