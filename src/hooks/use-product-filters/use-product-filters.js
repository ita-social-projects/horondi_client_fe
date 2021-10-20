import { useHistory, useLocation } from 'react-router';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { page, URL_QUERIES_NAME, FILTERS_KEYS } from '../../configs';
import {
  CATERGORY_TEXT,
  MODEL_TEXT,
  PATTERN_TEXT
} from '../../translations/product-list.translations';

const useProductFilters = (filterParams, filtersList) => {
  const { search } = useLocation();
  const { i18n } = useTranslation();
  const history = useHistory();
  const [filtersData, setFiltersData] = useState({});

  const searchParams = new URLSearchParams(search);

  const language = i18n.language === 'ua' ? 0 : 1;
  const filterNames = [CATERGORY_TEXT, MODEL_TEXT, PATTERN_TEXT];
  const queriesNames = [
    URL_QUERIES_NAME.categoryFilter,
    URL_QUERIES_NAME.modelsFilter,
    URL_QUERIES_NAME.patternsFilter
  ];

  const handleFilterChange = ({ target }, queryName, categoriesList) => {
    const query = searchParams.get(queryName);
    const currentCategory = categoriesList.find((el) => el.name[language].value === target.name);

    if (target.checked) {
      if (query) searchParams.set(queryName, query.concat(',', currentCategory._id));
      else searchParams.set(queryName, currentCategory._id);
    } else if (query) {
      searchParams.set(queryName, query.replace(currentCategory._id, ''));
    } else searchParams.delete(queryName);

    history.push(`?${searchParams.toString()}`);
  };

  const handleFilterClear = (queryName) => {
    searchParams.set(page, 1);
    searchParams.delete(queryName);
    history.push(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    const data = {};

    Object.keys(filtersList).forEach((key, index) => {
      data[key] = {
        filterName: filterNames[index][language].value,
        productFilter: filterParams[FILTERS_KEYS[index]] || [],
        list: map(filtersList[key], (el) => el.name[language].value),
        categories: filtersList[key],
        clearFilter: () => handleFilterClear(queriesNames[index]),
        filterHandler: (e) => handleFilterChange(e, queriesNames[index], filtersList[key])
      };
    });

    setFiltersData(data);
  }, [filtersList, filterParams, language]);

  return filtersData;
};

export default useProductFilters;
