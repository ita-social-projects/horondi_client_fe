import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NovaPost from '../nova-post';

jest.mock('../nova-post.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  deliveryLoading: false,
  cities: [],
  warehouses: []
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

describe('NovaPost component tests', () => {
  wrapper = shallow(<NovaPost {...props} />);

  it('Should render NovaPost', () => {
    expect(wrapper).toBeDefined();
  });

  it('NovaPost inputs test', () => {
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