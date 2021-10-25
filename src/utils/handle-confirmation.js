import React from 'react';
import i18next from 'i18next';

export const handleMessage = (error) =>
  error ? (
    <>
      <h3>{error}</h3>
    </>
  ) : (
    <>
      <h2>{i18next.t(`confirmation.welcome`)}</h2>
      <h3>{i18next.t(`confirmation.successRegistration`)}</h3>
    </>
  );
