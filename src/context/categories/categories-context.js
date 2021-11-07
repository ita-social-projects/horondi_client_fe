import React, { useState, createContext } from 'react';
import { useQuery } from '@apollo/client';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { getAllCategoriesQuery } from './constants';

export const CategoriesContext = createContext();

const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const { loading, error } = useQuery(getAllCategoriesQuery, {
    onCompleted: (data) => setCategories(data.getAllCategories.items)
  });

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return <CategoriesContext.Provider value={{ categories }}>{children}</CategoriesContext.Provider>;
};

export default CategoriesContextProvider;
