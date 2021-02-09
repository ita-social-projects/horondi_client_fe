import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export default function useProductSpecies() {
  const { language, filterData } = useSelector(({ Language, Products }) => ({
    language: Language.language,
    filterData: Products.filterData
  }));
  const categoriesNames = useMemo(
    () => [
      ...new Set(
        filterData.map(({ category }) => category.name[language].value)
      )
    ],
    [filterData]
  );

  const categories = useMemo(
    () =>
      categoriesNames.map(
        (category) =>
          filterData.find(
            ({ category: { name } }) => category === name[language].value
          ).category
      ),
    [filterData, categoriesNames]
  );

  const colorsNames = useMemo(
    () => [
      ...new Set(
        filterData.map(({ colors }) => colors[0].simpleName[language].value)
      )
    ],
    [filterData]
  );

  const color = useMemo(
    () =>
      colorsNames.map(
        (item) =>
          filterData.find(
            ({ colors }) => colors[0].simpleName[language].value === item
          ).colors
      ),
    [filterData, colorsNames]
  );

  const patternsNames = useMemo(
    () => [
      ...new Set(filterData.map(({ pattern }) => pattern[language].value))
    ],
    [filterData]
  );

  const patterns = useMemo(
    () =>
      patternsNames.map(
        (item) =>
          filterData.find(({ pattern }) => pattern[language].value === item)
            .pattern
      ),
    [filterData, patternsNames]
  );

  const modelNames = useMemo(
    () => [...new Set(filterData.map(({ model }) => model[language].value))],
    [filterData]
  );

  const models = useMemo(
    () =>
      modelNames.map(
        (item) =>
          filterData.find(({ model }) => model[language].value === item).model
      ),
    [filterData, modelNames]
  );

  return {
    color,
    colorsNames,
    categories,
    categoriesNames,
    models,
    modelNames,
    patterns,
    patternsNames
  };
}
