import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import UkrPost from '../ukrpost';

jest.mock('../ukrpost.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  deliveryLoading: false,
  ukrPoshtaCities: {},
  ukrPoshtaRegions: {},
  ukrPoshtaDistricts: {},
  ukrPoshtaPostOffices: {}
}));

let wrapper;

const props = {
  isLightTheme: true,
  values: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null
  },
  touched: {},
  errors: {},
  setFieldValue: jest.fn()
};

describe('UkrPost component tests', () => {
  wrapper = shallow(<UkrPost {...props} />);

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
