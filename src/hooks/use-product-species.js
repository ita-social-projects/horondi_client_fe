import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export default function useProductSpecies() {
  // console log filtered data
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
        filterData.map(
          ({ mainMaterial: { color } }) => color.simpleName[language].value
        )
      )
    ],
    [filterData]
  );

  const color = useMemo(
    () =>
      colorsNames.map(
        (item) =>
          filterData.find(
            ({ mainMaterial: { color } }) =>
              color.simpleName[language].value === item
          ).colors
      ),
    [filterData, colorsNames]
  );

  const patternsNames = useMemo(
    () => [
      ...new Set(filterData.map(({ pattern }) => pattern.name[language].value))
    ],
    [filterData]
  );

  const patterns = useMemo(
    () =>
      patternsNames.map(
        (item) =>
          filterData.find(
            ({ pattern }) => pattern.name[language].value === item
          ).pattern
      ),
    [filterData, patternsNames]
  );

  const modelNames = useMemo(
    () => [
      ...new Set(
        filterData.map((data) => data.model.name[language].value)
      )
    ],
    [filterData]
  );

  const models = useMemo(
    () =>
      modelNames.map(
        (item) =>
          filterData.find(({ model }) => model.name[language].value === item)
            .model
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
