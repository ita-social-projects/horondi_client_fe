import React from 'react';
import { useQuery } from '@apollo/client';
import BusinessPage from '../business-page';

jest.mock('../business-page.style.js', () => ({
  useStyles: () => ({})
}));
const mockData = {
  params: {
    page: 'about-us'
  }
};

jest.mock('@apollo/client');
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router')
}));

useQuery.mockImplementation(() => ({ error: null, loading: false }));

describe('BusinessPage component tests', () => {
  it('Should render BusinessPage', () => {
    const component = shallow(<BusinessPage match={mockData} />);
    expect(component).toBeDefined();
  });
});
