import React from 'react';
import i18next from 'i18next';
import { Loader } from '../components/loader/loader';

export const handleSuccessOrLoader = (userRecovered, successWindow) => {
  if (userRecovered) {
    return successWindow;
  }
  return <Loader heightWrap='214px' />;
};

const handleHelperErorrText = (error) =>
  error
    ? i18next.t(`user.recoveryError.${error}`, i18next.t('user.recoveryError.EMAIL_ERROR'))
    : null;

export const handleHelperText = (errorEmail, error) => errorEmail || handleHelperErorrText(error);
