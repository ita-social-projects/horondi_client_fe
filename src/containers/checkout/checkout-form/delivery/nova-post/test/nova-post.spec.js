import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useQuery } from '@apollo/client';
import NovaPost from '../nova-post';

jest.mock('../nova-post.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');

jest.mock('@apollo/client');

const useQueryData = {
  loading: false,
  error: false,
  data: {
    getNovaPoshtaCities: [],
    getNovaPoshtaWarehouses: []
  }
};
useQuery.mockImplementation(() => ({
  ...useQueryData
}));

let wrapper;

const props = {
  values: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null
  },
  touched: { city: 'test', courierOffice: 'test' },
  errors: { city: 'test', courierOffice: 'test' },
  setFieldValue: jest.fn()
};

describe('NovaPost component tests', () => {
  wrapper = mount(<NovaPost {...props} />);

  it('Should render NovaPost', () => {
    wrapper = mount(<NovaPost {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('NovaPost inputs test', () => {
    wrapper = mount(<NovaPost {...props} />);
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
