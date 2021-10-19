import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useStyles } from './models-list.style';
import ClassicButton from '../../../components/classic-button';
import ModelItem from '../../../components/model-item';
<<<<<<< HEAD
import { getAllModelsQuery } from './operations/getAllModels.queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';
=======
import Loader from '../../../components/loader';
import { getAllModelsQuery } from './operations/getAllModels.queries';
>>>>>>> f9e1a3ff (refactor models list, delete products table, remake tests)

const ModelsList = () => {
  const [models, setModels] = useState([]);
  const { t } = useTranslation();

  const [isModelsVisible, setIsModelsVisible] = useState(false);

  const styles = useStyles({ isModelsVisible, modelsCount: models.length });

  const onShowModels = () => {
    setIsModelsVisible(!isModelsVisible);
  };

  const { loading, error } = useQuery(getAllModelsQuery, {
    onCompleted: (data) => setModels(data.getAllModels.items)
  });

<<<<<<< HEAD
  if (loading || error) return errorOrLoadingHandler(error, loading);

=======
  if (loading || error) {
    return <Loader />;
  }
>>>>>>> f9e1a3ff (refactor models list, delete products table, remake tests)
  return (
    <div className={styles.root} data-section-style='light' id='models'>
      <div className={styles.modelsWrapper}>
        {models?.map((model) => (
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
