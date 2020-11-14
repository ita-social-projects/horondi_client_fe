import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useStyles } from './models-list.style';
import { useStyles as useModelItemStyles } from './model-item/model-item.style';
import { getAllModels } from '../../../redux/model/model.actions';
import CircularLoadingBar from '../../../components/circular-loading-bar';
import ClassicButton from '../../../components/classic-button';
import ModelItem from './model-item';
import { HOME_BUTTONS } from '../../../translations/homepage.translations';

const ModelsList = () => {
  const dispatch = useDispatch();
  const { models, loading, language } = useSelector(({ Model, Language }) => ({
    models: Model.models,
    loading: Model.loading,
    language: Language.language
  }));

  const [isModelsVisible, setIsModelsVisible] = useState(false);

  const styles = useStyles({ isModelsVisible, modelsCount: models.length });
  const modelItemStyles = useModelItemStyles();

  useEffect(() => {
    dispatch(getAllModels());
  }, [dispatch]);

  const onShowModels = () => {
    setIsModelsVisible(!isModelsVisible);
  };

  if (loading) {
    return <CircularLoadingBar />;
  }

  return (
    <div className={styles.root} id='models'>
      <div className={styles.modelsWrapper}>
        {models.map((model) => (
          <ModelItem key={model._id} model={model} />
        ))}
        <Link className={modelItemStyles.modelItem} to='/unique'>
          <div className={modelItemStyles.modelItemTitle}>Unique</div>
          <div
            className={modelItemStyles.modelItemImage}
            style={{
              background: `url(https://i.imgur.com/ygJaph4.jpg) center center`,
              backgroundSize: 'cover'
            }}
          />
        </Link>
      </div>
      <ClassicButton
        style={isModelsVisible ? 'classic' : 'inverse'}
        buttonType='text'
        innerText={
          isModelsVisible
            ? HOME_BUTTONS[language].HIDE_MODELS
            : HOME_BUTTONS[language].ALL_MODELS
        }
        onClickHandler={onShowModels}
      />
    </div>
  );
};

export default ModelsList;
