import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { useDispatch, useSelector } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import ProductListPage from '../product-list-page';

Enzyme.configure({ adapter: new Adapter() });
const dispatch = jest.fn();

const state = {
  filterMenuStatus: false,
  loading: false,
  language: 0,
  products: [
    {
      _id: '1'
    }
  ],
  sortByPopularity: -1,
  countPerPage: 9,
  currentPage: 1,
  filterStatus: false
};
jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));
jest.mock('react-redux');
jest.mock('../product-list-page.styles', () => ({
  useStyles: () => ({})
}));
useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  state
}));

describe('Recovery component tests', () => {
  it('Should render Recovery', () => {
    const component = shallow(<ProductListPage />);
    expect(component).toBeDefined();
  });
});
