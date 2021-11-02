import React, { useState, createContext } from 'react';
import { useQuery } from '@apollo/client';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { getAllCategoriesQuery } from './constants';

export const CategoriesContext = createContext();

const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const { loading, error } = useQuery(getAllCategoriesQuery, {
    onCompleted: (data) => {
      const categoriesList = data.getAllCategories.items;
      categoriesList.forEach((categorie) => {
        categorie.translationsKey = categorie.translations_key;
        delete categorie.translations_key;
      });
      setCategories(categoriesList);
    }
  });

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return <CategoriesContext.Provider value={{ categories }}>{children}</CategoriesContext.Provider>;
};

export default CategoriesContextProvider;
