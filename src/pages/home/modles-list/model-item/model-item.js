import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './model-item.style';
import {
  setColorsFilter,
  setHotItemFilter,
  setModelsFilter,
  setPatternsFilter,
  setPriceFilter,
  setSearchFilter
} from '../../../../redux/products/products.actions';
import { HOME_BUTTONS } from '../../../../translations/homepage.translations';

const images = [
  'https://i.imgur.com/YrV1ajs.png',
  'https://i.imgur.com/ET5P2BQ.png',
  'https://i.imgur.com/EgQqur6.png'
];

const ModelItem = ({ model }) => {
  const { language, filterData } = useSelector(({ Language, Products }) => ({
    language: Language.language,
    filterData: Products.filterData
  }));

  const dispatch = useDispatch();
  const styles = useStyles();

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

  return (
    <div
      key={model.name[1].value}
      className={styles.modelItem}
      onClick={() => handleClick(model)}
    >
      <div className={styles.modelItemTitle}>{model.name[language].value}</div>
      <div className={styles.modelItemImage}>
        <img src={images[Math.floor(Math.random() * (2 + 1))]} alt='model' />
      </div>
      <Link
        className={styles.link}
        to={`/${model.category.name[1].value.toLowerCase()}/${model.name[1].value.toLowerCase()}`}
      >
        {HOME_BUTTONS[language].MOVE_TO_MODEL}
        <span>&#8594;</span>
      </Link>
    </div>
  );
};

export default ModelItem;
