export const selectCurrencySign = (currency, faHryvnia, faDollarSign) => {
  const dollar = currency === 1 ? faDollarSign : '';
  return currency === 0 ? faHryvnia : dollar;
};
