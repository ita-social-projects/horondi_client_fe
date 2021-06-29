export const getFormatDate = (value) =>
  new Intl.DateTimeFormat('en-GB').format(value).replaceAll('/', '.');
