import React from 'react';
import i18next from 'i18next';

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
