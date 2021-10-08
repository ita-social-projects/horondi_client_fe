import React from 'react';
import { Redirect } from 'react-router-dom';
import { Loader } from '../components/loader/loader';
import routes from '../const/routes';

export default function errorOrLoadingHandler(error, loading) {
  const { pathToErrorPage } = routes;

  if (error) return <Redirect to={pathToErrorPage} />;
  if (loading) return <Loader />;
}
