import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useStyles } from './models-list.style';
import { getAllModels } from '../../../redux/model/model.actions';
import ClassicButton from '../../../components/classic-button';
import ModelItem from '../../../components/model-item';
import Loader from '../../../components/loader';

const ModelsList = () => {
  const dispatch = useDispatch();
  const { models, modelsLoading } = useSelector(({ Model }) => ({
    models: Model.models,
    modelsLoading: Model.loading
  }));
  const { t } = useTranslation();

  const [isModelsVisible, setIsModelsVisible] = useState(false);

  const styles = useStyles({ isModelsVisible, modelsCount: models.length });

  useEffect(() => {
    dispatch(getAllModels());
  }, [dispatch]);

  const onShowModels = () => {
    setIsModelsVisible(!isModelsVisible);
  };

  if (modelsLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.root} data-section-style='light' id='models'>
      <div className={styles.modelsWrapper}>
        {models.map((model) => (
          <ModelItem key={model._id} model={model} />
        ))}
      </div>
      <ClassicButton
        buttonStyle={isModelsVisible ? 'classic' : 'inverse'}
        buttonType='button'
        innerText={isModelsVisible ? t('common.hide') : t('home.allModels')}
        onClickHandler={onShowModels}
      />
    </div>
  );
};

export default ModelsList;
