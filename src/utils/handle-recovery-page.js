import React from 'react';
import i18next from 'i18next';
import { Loader } from '../components/loader/loader';

export const handleRecoveryLoaderOrWindow = (userRecovered, successWindow) => {
  if (userRecovered) {
    return successWindow;
  }
  return <Loader />;
};

const handleHelperErorrText = (error) => error
  ? i18next.t(`user.recoveryError.${error}`, i18next.t('user.recoveryError.EMAIL_ERROR'))
  : null;

export const handleHelperText = (errorEmail, error) => errorEmail || handleHelperErorrText(error);

export const handleClass = (errorEmail, style) => (errorEmail ? style : null);
