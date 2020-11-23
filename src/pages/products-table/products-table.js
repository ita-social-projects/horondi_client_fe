import React, { useEffect, useState, useMemo } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './products-table.style';
import {
  setModelsFilter,
  setPriceFilter,
  setPatternsFilter,
  setColorsFilter,
  setHotItemFilter,
  setSearchFilter
} from '../../redux/products/products.actions';
import { getModelsByCategory } from '../../redux/model/model.actions';
import { getImage } from '../../utils/imageLoad';
import { Loader } from '../../components/loader/loader';
import { carouselInterval } from '../../configs';
import ModelItem from '../../components/model-item';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ProductsTable = ({ category }) => {
  const [images, setImages] = useState([]);
  const styles = useStyles();
  const dispatch = useDispatch();

  const { models, loading, language, filterData } = useSelector(
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

  useMemo(() => {
    models.forEach((item) => {
      getImage(item.images.large)
        .then((src) => setImages((prev) => [...prev, src]))
        .catch((badSrc) => setImages((prev) => [...prev, badSrc]));
    });
  }, [models]);

  if (loading) {
    return (
      <div className={styles.center}>
        <Loader />
      </div>
    );
  }

  const handleClick = (model) => {
    dispatch(setModelsFilter([model.name[1].value]));
    dispatch(setPatternsFilter([]));
    dispatch(setColorsFilter([]));
    dispatch(setSearchFilter(''));
    dispatch(setHotItemFilter(false));
    dispatch(
      setPriceFilter([
        Math.min(...filterData.map((product) => product.basePrice[0].value)),
        Math.max(...filterData.map((product) => product.basePrice[0].value))
      ])
    );
  };
  console.log(models);
  return (
    <div className={styles.container}>
      {models.map((model) => (
        <ModelItem key={model._id} model={model} />
      ))}
    </div>
  );
};

export default ProductsTable;
