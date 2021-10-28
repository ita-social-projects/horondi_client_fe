import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useQuery, useLazyQuery } from '@apollo/client';
import NovaPost from '../nova-post';

jest.mock('../nova-post.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');

jest.mock('@apollo/client');

useQuery.mockImplementation(() => ({
  refetch: () => jest.fn(),
  data: {
    getNovaPoshtaCities: []
  }
}));

useLazyQuery.mockImplementation(() => [
  () => null,
  { loading: false, data: { getNovaPoshtaWarehouses: [] } }
]);
let wrapper;

const props = {
  isLightTheme: true,
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
