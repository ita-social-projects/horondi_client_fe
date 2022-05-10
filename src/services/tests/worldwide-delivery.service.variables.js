export const countriesResponseMock = {
  data: {
    error: false,
    msg: 'some message',
    data: [{ name: 'Ukraine' }, { name: 'Belgium' }]
  }
};

export const statesResponseMock = {
  data: {
    data: { states: [{ name: 'Lviv Oblast' }, { name: 'Dnipropetrovsk Oblast' }] }
  }
};

export const citiesResponseMock = { data: { data: [] } };

export const endpoints = {
  countries: 'https://countriesnow.space/api/v0.1/countries/states',
  states: {
    url: 'https://countriesnow.space/api/v0.1/countries/states',
    body: { country: 'Ukraine' }
  },
  cities: {
    url: 'https://countriesnow.space/api/v0.1/countries/state/cities',
    body: { country: 'Belgium', state: 'Luxembourg' }
  }
};
