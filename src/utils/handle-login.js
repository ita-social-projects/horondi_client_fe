import React from 'react';
import { USER_ERROR } from '../translations/user.translations';

export const handleErrorMessage = (loginError, className, language) => {
  if (loginError) {
    return (
      <p className={className}>
        {USER_ERROR[loginError]
          ? USER_ERROR[loginError][language].value
          : USER_ERROR.DEFAULT_ERROR[language].value}
      </p>
    );
  }
  return null;
};
