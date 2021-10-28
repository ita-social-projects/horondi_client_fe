import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useQuery } from '@apollo/client';
import UkrPost from '../ukrpost';

jest.mock('../ukrpost.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
jest.mock('@apollo/client');

useQuery.mockImplementation(() => ({ error: null, loading: false, data: [] }));

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
