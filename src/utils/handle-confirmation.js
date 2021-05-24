import React from 'react';
import { WELCOME_MESSAGE, CONFIRM_ERROR } from '../translations/user.translations';

export const handleMessage = (error, language) =>
  error ? (
    <>
      <h3>{CONFIRM_ERROR[language].value}</h3>
    </>
  ) : (
    <>
      <h2>{WELCOME_MESSAGE[language].h2}</h2>
      <h3>{WELCOME_MESSAGE[language].h3}</h3>
    </>
  );
