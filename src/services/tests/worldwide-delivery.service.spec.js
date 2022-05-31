import axios from 'axios';
import worldwideService from '../worldwide-delivery.service';
import {
  countriesResponseMock,
  statesResponseMock,
  citiesResponseMock,
  endpoints
} from './worldwide-delivery.service.variables';

jest.mock('axios');

describe('worldwideService tests', () => {
  it('should return countries', async () => {
    axios.get.mockResolvedValueOnce(countriesResponseMock);

    const result = await worldwideService.getCountries();

    expect(axios.get).toHaveBeenCalledWith(endpoints.countries);
    expect(result).toEqual(['Ukraine', 'Belgium']);
  });

  it('should return states', async () => {
    axios.post.mockResolvedValueOnce(statesResponseMock);

    const result = await worldwideService.getStatesByCountry('Ukraine');

    expect(axios.post).toHaveBeenCalledWith(endpoints.states.url, endpoints.states.body);
    expect(result).toEqual(['Lviv Oblast', 'Dnipropetrovsk Oblast']);
  });

  it('should return emty cities', async () => {
    axios.post.mockResolvedValueOnce(citiesResponseMock);

    const result = await worldwideService.getCitiesByCountryAndState('Belgium', 'Luxembourg');

    expect(axios.post).toHaveBeenCalledWith(endpoints.cities.url, endpoints.cities.body);
    expect(result).toEqual([]);
  });
});
