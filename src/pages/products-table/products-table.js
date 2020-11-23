import React, { useEffect, useMemo } from 'react';
import 'react-awesome-slider/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './products-table.style';
import { getModelsByCategory } from '../../redux/model/model.actions';
import { Loader } from '../../components/loader/loader';
import ModelItem from '../../components/model-item';

const ProductsTable = ({ category }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { models, loading, filterData } = useSelector(
    ({ Model, Products, Language }) => ({
      models: Model.models,
      language: Language.language,
      loading: Model.loading,
      filterData: Products.filterData
    })
  );

  useEffect(() => {
    dispatch(getModelsByCategory(category._id));
  }, [dispatch, category]);

  if (loading) {
    return (
      <div className={styles.center}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {models.map((model) => (
        <ModelItem key={model._id} model={model} />
      ))}
    </div>
  );
};

export default ProductsTable;
