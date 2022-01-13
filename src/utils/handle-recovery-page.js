import React from 'react';
import { Loader } from '../components/loader/loader';
import { RECOVERY_ERROR_MESSAGE } from '../translations/user.translations';

export const handleRecoveryLoaderOrWindow = (userRecovered, successWindow) => {
  if (userRecovered) {
    return successWindow;
  }
  return <Loader />;
};

const handleHelperErorrText = (error, language) =>
  RECOVERY_ERROR_MESSAGE[error]
    ? RECOVERY_ERROR_MESSAGE[error][language].value
    : RECOVERY_ERROR_MESSAGE.EMAIL_ERROR[language].value;

const handleHelperError = (error, language) =>
  error ? handleHelperErorrText(error, language) : null;

export const handleHelperText = (errorEmail, error, language) =>
  errorEmail || handleHelperError(error, language);

export const handleClass = (errorEmail, style) => (errorEmail ? style : null);
