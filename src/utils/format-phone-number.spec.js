import { formatPhoneNumber } from './format-phone-number';

const phoneNumberShort = '0961737361';
const phoneNumberLong = '+380961737361';

describe('formatPhoneNumber test', () => {
  it('should return expected result', () => {
    const result = formatPhoneNumber(phoneNumberShort);

    expect(result).toEqual('+38 (096) 173 73 61');
  });
  it('should return expected result', () => {
    const result = formatPhoneNumber(phoneNumberLong);

    expect(result).toEqual('+38 (096) 173 73 61');
  });
  it('should return expected result', () => {
    const result = formatPhoneNumber(+380961737361);

    expect(result).toEqual('');
  });
});
