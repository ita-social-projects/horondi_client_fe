import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { useStyles } from './model-item.style';

import {
  setColorsFilter,
  setHotItemFilter,
  setModelsFilter,
  setPatternsFilter,
  setPriceFilter,
  setSearchFilter
} from '../../redux/products/products.actions';
import { HOME_BUTTONS } from '../../translations/homepage.translations';
import { IMG_URL } from '../../configs';

const ModelItem = ({ model }) => {
  const { language, products } = useSelector(({ Language, Products }) => ({
    language: Language.language,
    products: Products.products
  }));
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleClickToModel = (selectedModel) => {
    dispatch(setModelsFilter([selectedModel.name[1].value]));
    dispatch(setPatternsFilter([]));
    dispatch(setColorsFilter([]));
    dispatch(setSearchFilter(''));
    dispatch(setHotItemFilter(false));
    dispatch(
      setPriceFilter([
        Math.min(...products.map((product) => product.basePrice[0].value)),
        Math.max(...products.map((product) => product.basePrice[0].value))
      ])
    );
  };

  return (
    <Link
      to={`/catalog/${model.category.name[1].value.toLowerCase()}/${model.name[1].value.toLowerCase()}`}
      key={model.name[1].value}
      className={styles.modelItem}
      onClick={() => handleClickToModel(model)}
    >
      <div className={styles.modelItemTitle}>{model.name[language].value}</div>
      <div className={styles.modelItemImage}>
        <img src={IMG_URL + model.images.small} alt='model' />
      </div>
      <footer className={styles.link}>
        {HOME_BUTTONS[language].MOVE_TO_MODEL}
        <ArrowRightAltIcon />
      </footer>
    </Link>
  );
};

export default ModelItem;
