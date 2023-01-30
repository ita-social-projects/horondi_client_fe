import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useStyles } from './models-list.style';
import ClassicButton from '../../../components/classic-button';
import ModelItem from '../../../components/model-item';
import { getAllModelsQuery } from './operations/getAllModels.queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';
import { URL_QUERIES_NAME } from '../../../configs/index';
import { useAppStyles } from '../../../components/app/app.styles';

const ModelsList = () => {
  const [models, setModels] = useState([]);
  const { t } = useTranslation();

  const [isModelsVisible, setIsModelsVisible] = useState(false);

  const styles = useStyles({ isModelsVisible, modelsCount: models.length });
  const appStyles = useAppStyles();

  const onShowModels = () => {
    setIsModelsVisible(!isModelsVisible);
  };

  const { loading, error } = useQuery(getAllModelsQuery, {
    onCompleted: (data) => setModels(data.getAllModels.items)
  });

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <div id='models' data-section-style='light' className={appStyles.rootApp}>
      <div
        className={`${appStyles.containerApp} ${styles.root}`}
        data-section-style='light'
        id='models'
      >
        <div className={styles.modelsTitle}>{t('home.models')}</div>
        <div
          className={`${styles.modelsWrapper} ${
            isModelsVisible ? styles.modelsWrapperOpened : styles.modelsWrapperClosed
          }`}
        >
          {models.map((model) => (
            <ModelItem
              key={model._id}
              model={model}
              modelsUrl={`${URL_QUERIES_NAME.modelsFilter}=%2C${model._id}`}
            />
          ))}
        </div>
        <ClassicButton
          buttonStyle={isModelsVisible ? 'classic' : 'inverse'}
          buttonType='button'
          innerText={isModelsVisible ? t('common.hide') : t('home.allModels')}
          onClickHandler={onShowModels}
        />
      </div>
    </div>
  );
};

export default ModelsList;
