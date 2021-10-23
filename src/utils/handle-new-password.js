import React from 'react';
import i18next from 'i18next';
import { Loader } from '../components/loader/loader';

export const handleNewPasswodLoaderOrWindow = (passwordReset, successWindow) => {
  if (passwordReset) {
    return successWindow;
  }
  return <Loader />;
};

export const handleErrorMessage = (userError, className) => {
  if (userError) {
    return (
      <p className={className}>
        {i18next.t(
          `user.newPasswordError.${userError}`,
          i18next.t('user.newPasswordError.DEFAULT_ERROR')
        )}
      </p>
    );
  }
  return null;
};
