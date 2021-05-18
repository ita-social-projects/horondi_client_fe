import React from 'react';
import { LOGIN_USER_ERROR } from '../translations/user.translations';

export const handleErrorMessage = (loginError, className, language) => {
  if (loginError) {
    return (
      <p className={className}>
        {LOGIN_USER_ERROR[loginError]
          ? LOGIN_USER_ERROR[loginError][language].value
          : LOGIN_USER_ERROR.DEFAULT_ERROR[language].value}
      </p>
    );
  }
  return null;
};
