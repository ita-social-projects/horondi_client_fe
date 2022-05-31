import { useHistory, useLocation } from 'react-router';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { URL_QUERIES_NAME } from '../../configs';

const useProductFilters = (filterParams, filtersList) => {
  const { search } = useLocation();
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const [filtersData, setFiltersData] = useState({});
  const { page, defaultPage } = URL_QUERIES_NAME;

  const searchParams = new URLSearchParams(search);

  const language = i18n.language === 'ua' ? 0 : 1;
  const filterNames = ['category', 'models', 'patterns'];
  const queriesNames = [
    URL_QUERIES_NAME.categoryFilter,
    URL_QUERIES_NAME.modelsFilter,
    URL_QUERIES_NAME.patternsFilter
  ];

  const handleFilterChange = ({ target }, queryName, categoriesList) => {
    const query = searchParams.get(queryName) || '';
    const currentCategory = categoriesList.find((el) => el.name[language].value === target.name);

    target.checked
      ? searchParams.set(queryName, query.concat(',', currentCategory._id))
      : searchParams.set(queryName, query.replace(`,${currentCategory._id}`, ''));

    searchParams.set(page, defaultPage);
    history.push(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    const data = {};

    Object.keys(filtersList).forEach((key, index) => {
      data[key] = {
        filterName: t(`common.${filterNames[index]}`),
        productFilter: filterParams[filterNames[index]] || [],
        list: map(filtersList[key], (el) => el.name[language].value),
        categories: filtersList[key],
        filterHandler: (e) => handleFilterChange(e, queriesNames[index], filtersList[key])
      };
    });
    setFiltersData(data);
  }, [filtersList, filterParams, language]);

  return filtersData;
};

export default useProductFilters;
