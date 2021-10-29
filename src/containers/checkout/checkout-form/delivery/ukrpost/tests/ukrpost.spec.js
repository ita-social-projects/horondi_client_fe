import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useQuery } from '@apollo/client';
import { mount, shallow } from 'enzyme';
import UkrPost from '../ukrpost';

jest.mock('../ukrpost.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
jest.mock('@apollo/client');

const useQueryData = {
  loading: false,
  error: false,
  data: {
    getUkrPoshtaRegions: [],
    getUkrPoshtaDistrictsByRegionId: [],
    getUkrPoshtaCitiesByDistrictId: [],
    getUkrPoshtaPostofficesCityId: []
  }
};

let wrapper;

const props = {
  isLightTheme: true,
  values: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null
  },
  touched: { region: 'Житомирська', district: 'Житомирський', city: 'Житомир', courierOffice: '1' },
  errors: { region: 'Житомирська', district: 'Житомирський', city: 'Житомир', courierOffice: '1' },
  setFieldValue: jest.fn()
};
useQuery.mockImplementation(() => ({
  ...useQueryData
}));

describe('UkrPost component tests', () => {
  wrapper = mount(<UkrPost {...props} />);

  it('Should render UkrPost', () => {
    expect(wrapper).toBeDefined();
  });

  it('UkrPost inputs test', () => {
    wrapper.find(Autocomplete).forEach((i) => {
      i.props().onChange('event', 'test');
      i.props().onChange('event');
      i.props().onInputChange('event', 'value', 'reason');
      i.props().onInputChange('event', 'value', 'reset');
      i.props().getOptionLabel('');
      expect(i).toBeDefined();
    });
  });
});
