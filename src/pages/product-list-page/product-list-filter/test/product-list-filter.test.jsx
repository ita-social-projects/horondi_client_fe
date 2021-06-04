import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useDispatch } from 'react-redux';
import {Grid} from '@material-ui/core';
import PriceFilter from '../price-filter';
import HotItemFilter from '../hot-item-filter';
import * as reactRedux from 'react-redux';
import { StandardButton } from '../../../../components/buttons';
import CategoryDelete from '../category-delete';
import store from './store';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = store;

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: (selector) => selector(mockStore),
  useDispatch: () => jest.fn()
}));

describe('Categories test', () => {
  const mockHolder = jest.fn();
  let wrapper;
  jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    wrapper = mount(<ProductListFilter />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Should render DialogWindow page', () => {
    expect(wrapper).toBeDefined();
  });
  it('Should render Grid', () => {
    expect(wrapper.exists(Grid)).toBe(true);
  });
  it('Button is working', () => {
    useDispatch.mockReturnValue(mockHolder);
    const wrapper = mount(<CategoryDelete />);
    wrapper.find(StandardButton).simulate('click');
    expect(mockHolder.mock.calls.length).toEqual(1);
  });
});
