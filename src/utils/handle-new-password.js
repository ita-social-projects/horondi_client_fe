import React from 'react';
import { Loader } from '../components/loader/loader';
import { NEW_PASSWORD_ERROR } from '../translations/user.translations';

export const handleNewPasswodLoaderOrWindow = (passwordReset, successWindow) => {
  if (passwordReset) {
    return successWindow;
  }
  return <Loader />;
};

export const handleErrorMessage = (userError, className, language) => {
  if (userError) {
    return (
      <p className={className}>
        {NEW_PASSWORD_ERROR[userError]
          ? NEW_PASSWORD_ERROR[userError][language].value
          : NEW_PASSWORD_ERROR.DEFAULT_ERROR[language].value}
      </p>
    );
  }
  return null;
};
