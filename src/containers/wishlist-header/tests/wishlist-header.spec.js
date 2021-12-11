import React from 'react';
import { useQuery } from '@apollo/client';
import WishlistHeader from '../wishlist-header';

jest.mock('../wishlist-header.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('@apollo/client');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [true, () => null],
  useEffect: (cb) => cb()
}));

const useQueryData = {
  loading: false,
  data: {}
};

let wrapper;

describe('Test for the wishlist-header component', () => {
  it('It should render the wishlist-header component', () => {
    useQuery.mockImplementation(() => ({ ...useQueryData }));
    wrapper = shallow(<WishlistHeader />);
    expect(wrapper).toBeDefined();
  });
});
