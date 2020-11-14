import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useStyles } from './models-list.style';
import { useStyles as useModelItemStyles } from './model-item/model-item.style';
import { getAllModels } from '../../../redux/model/model.actions';
import CircularLoadingBar from '../../../components/circular-loading-bar';
import ModelItem from './model-item';

const ModelsList = () => {
  const styles = useStyles();
  const modelItemStyles = useModelItemStyles();
  const dispatch = useDispatch();

  const { models, loading } = useSelector(({ Model }) => ({
    models: Model.models,
    loading: Model.loading
  }));

  useEffect(() => {
    dispatch(getAllModels());
  }, [dispatch]);

  if (loading) {
    return <CircularLoadingBar />;
  }

  return (
    <div className={styles.root} id='#models'>
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
  );
};

export default ModelsList;
