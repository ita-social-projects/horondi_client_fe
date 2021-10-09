import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { useDispatch } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import HotItemFilter from '../product-list-filter/hot-item-filter/hot-item-filter';

Enzyme.configure({ adapter: new Adapter() });
const dispatch = jest.fn();
jest.mock('react-redux');
jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

useDispatch.mockImplementation(() => dispatch);

describe('HotItemFilter component tests', () => {
  it('Should render HotItemFilter', () => {
    const component = shallow(<HotItemFilter />);
    expect(component).toBeDefined();
  });
});
