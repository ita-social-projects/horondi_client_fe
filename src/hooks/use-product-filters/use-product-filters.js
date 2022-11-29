import { useEffect, useState, useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';
import { URL_QUERIES_NAME, FILTER_NAMES } from '../../configs';

const useProductFilters = (filterParams, filtersList) => {
  const { search } = useLocation();
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const [filtersData, setFiltersData] = useState({});
  const { page, defaultPage, categoryFilter, modelsFilter, patternsFilter } = URL_QUERIES_NAME;

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const language = i18n.language === 'ua' ? 0 : 1;
  const queriesNames = useMemo(
    () => [categoryFilter, modelsFilter, patternsFilter],
    [categoryFilter, modelsFilter, patternsFilter]
  );

  const handleFilterChange = useCallback(
    ({ target }, queryName, categoriesList) => {
      const query = searchParams.get(queryName) || '';
      const currentCategory = categoriesList.find((el) => el.name[language].value === target.name);

      target.checked
        ? searchParams.set(queryName, query.concat(',', currentCategory._id))
        : searchParams.set(queryName, query.replace(`,${currentCategory._id}`, ''));

      searchParams.set(page, defaultPage);
      history.push(`?${searchParams.toString()}`);
    },
    [defaultPage, history, language, page, searchParams]
  );

  useEffect(() => {
    const data = {};

    Object.keys(filtersList).forEach((key, index) => {
      data[key] = {
        filterName: t(`common.${FILTER_NAMES[index]}`),
        productFilter: filterParams[FILTER_NAMES[index]] || [],
        list: map(filtersList[key], (el) => el.name[language].value),
        categories: filtersList[key],
        filterHandler: (e) => handleFilterChange(e, queriesNames[index], filtersList[key])
      };
    });

    setFiltersData(data);
    // eslint-disable-next-line
  }, [filtersList, filterParams, language, queriesNames]);

  return filtersData;
};

export default useProductFilters;
