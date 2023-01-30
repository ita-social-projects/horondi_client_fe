import i18next from 'i18next';

const handleHelperErorrText = (error) =>
  error
    ? i18next.t(`user.recoveryError.${error}`, i18next.t('user.recoveryError.EMAIL_ERROR'))
    : null;

export const handleHelperText = (errorEmail, error) => errorEmail || handleHelperErorrText(error);
