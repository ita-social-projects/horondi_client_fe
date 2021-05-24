import { errorMessages } from '../translations/chat.translation';

export const handleHelperText = (validation, shouldValidate, language, label) =>
  !validation && shouldValidate ? `${errorMessages[language].value[label]}` : '';
