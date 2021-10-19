import React, { useState, createContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import errorOrLoadingHandler from '../utils/errorOrLoadingHandler';

export const CategoriesContext = createContext();

const getAllCategoriesQuery = gql`
  query {
    getAllCategories {
      items {
        _id
        code
        name {
          lang
          value
        }
        images {
          large
        }
        available
      }
      count
    }
  }
`;

const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const { loading, error } = useQuery(getAllCategoriesQuery, {
    onCompleted: (data) => setCategories(data.getAllCategories.items)
  });

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return <CategoriesContext.Provider value={{ categories }}>{children}</CategoriesContext.Provider>;
};

export default CategoriesContextProvider;
