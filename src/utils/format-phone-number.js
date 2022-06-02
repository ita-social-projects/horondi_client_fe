export const formatPhoneNumber = (phone = '') => {
  if (typeof phone !== 'string') {
    return '';
  }
  if (phone.length === 10) {
    return `+38 (${phone.slice(0, 3)}) ${phone.slice(3, 6)} ${phone.slice(6, 8)} ${phone.slice(
      8,
      10
    )}`;
  }
  return (
    `${phone.slice(0, 3)} (${phone.slice(3, 6)}) ${phone.slice(6, 9)} ${phone.slice(
      9,
      11
    )} ${phone.slice(11, 13)}` || ''
  );
};
