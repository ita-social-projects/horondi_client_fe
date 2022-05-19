export const props = {
  values: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null,
    worldWideCountry: '',
    stateOrProvince: '',
    worldWideCity: '',
    worldWideStreet: '',
    cityCode: ''
  },
  touched: { messenger: 'test', messengerPhone: 'test' },
  errors: { messenger: 'test', messengerPhone: 'test' },
  setFieldValue: () => {}
};

export const countriesMock = {
  data: {
    error: false,
    msg: 'some message',
    data: [{ name: 'Ukraine' }, { name: 'Belgium' }]
  }
};
