import i18next from 'i18next';

export const handleHelperText = (validation, shouldValidate, label) =>
  !validation && shouldValidate ? i18next.t(`error.profile.${label}`) : '';
