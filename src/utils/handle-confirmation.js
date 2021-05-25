import React from 'react';
import { WELCOME_MESSAGE } from '../translations/user.translations';
import Error from '../pages/error-page/error-page';

export const handleMessage = (error, language) =>
  error ? (
    <>
      <h3>{error}</h3>
    </>
  ) : (
    <>
      <h2>{WELCOME_MESSAGE[language].h2}</h2>
      <h3>{WELCOME_MESSAGE[language].h3}</h3>
    </>
  );
