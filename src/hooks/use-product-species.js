import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export default function useProductSpecies() {
  const filterData = useSelector(({ Products }) => Products.filterData);

  const categoriesNames = useMemo(
    () => [
      ...new Set(filterData.map(({ category }) => category.name[0].value))
    ],
    [filterData]
  );

  const categories = useMemo(
    () =>
      categoriesNames.map(
        (category) =>
          filterData.find(
            ({ category: { name } }) => category === name[0].value
          ).category
      ),
    [filterData, categoriesNames]
  );

  const colorsNames = useMemo(
    () => [
      ...new Set(filterData.map(({ colors }) => colors[0].simpleName[0].value))
    ],
    [filterData]
  );

  const colors = useMemo(
    () =>
      colorsNames.map(
        (item) =>
          filterData.find(
            ({ colors }) => colors[0].simpleName[0].value === item
          ).colors
      ),
    [filterData, colorsNames]
  );

  const patternsNames = useMemo(
    () => [...new Set(filterData.map(({ pattern }) => pattern[0].value))],
    [filterData]
  );

  const patterns = useMemo(
    () =>
      patternsNames.map(
        (item) =>
          filterData.find(({ pattern }) => pattern[0].value === item).pattern
      ),
    [filterData, patternsNames]
  );

  const modelNames = useMemo(
    () => [...new Set(filterData.map(({ model }) => model[0].value))],
    [filterData]
  );

  const models = useMemo(
    () =>
      modelNames.map(
        (item) => filterData.find(({ model }) => model[0].value === item).model
      ),
    [filterData, modelNames]
  );

  return {
    colors,
    colorsNames,
    categories,
    categoriesNames,
    models,
    modelNames,
    patterns,
    patternsNames
  };
}
