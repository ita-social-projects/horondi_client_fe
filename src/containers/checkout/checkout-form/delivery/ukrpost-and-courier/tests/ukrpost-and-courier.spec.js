import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useQuery } from '@apollo/client';
import UkrpostAndCourier from '../ukrpost-and-courier';

jest.mock('../ukrpost-and-courier.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
jest.mock('@apollo/client');

const useQueryData = {
  loading: false,
  error: false,
  data: {}
};

let wrapper;

const props = {
  isLightTheme: true,
  language: 1,
  values: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null
  },
  handleChange: jest.fn(),
  touched: {
    region: 'Житомирська',
    district: 'Житомирський',
    city: 'Житомир',
    street: 'Шевченка',
    courierOffice: '1'
  },
  errors: {
    region: 'Cannot be empty',
    district: 'Cannot be empty',
    city: 'Cannot be empty',
    street: 'Cannot be empty',
    courierOffice: 'Cannot be empty'
  },
  setFieldValue: jest.fn()
};
useQuery.mockImplementation(() => ({
  ...useQueryData
}));

describe('UkrpostAndCourier component tests', () => {
  wrapper = mount(<UkrpostAndCourier {...props} />);

  it('Should render UkrpostAndCourier', () => {
    expect(wrapper).toBeDefined();
  });

  it('UkrpostAndCourier inputs test', () => {
    wrapper.find(Autocomplete).forEach((i) => {
      i.props().onChange('event', 'test');
      i.props().onChange('event');
      i.props().onInputChange('event', 'value', 'reason');
      i.props().onInputChange('event', 'value', 'reset');
      i.props().getOptionLabel('');
      expect(i).toBeDefined();
      expect(i.props().options).toEqual([]);
    });
  });
  it('should add data to UkrpostAndCourier fields', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      data: {
        getUkrPoshtaRegions: ['test', 'test2'],
        getUkrPoshtaDistrictsByRegionId: ['test', 'test2'],
        getUkrPoshtaCitiesByDistrictId: ['test', 'test2'],
        getUkrPoshtaStreetsByCityId: ['test', 'test2'],
        getUkrPoshtaPostofficesCityId: ['test', 'test2']
      }
    }));
    wrapper = mount(<UkrpostAndCourier {...props} />);
    wrapper.find(Autocomplete).forEach((i) => {
      expect(i.props().options).toEqual(['test', 'test2']);
    });
  });
});
