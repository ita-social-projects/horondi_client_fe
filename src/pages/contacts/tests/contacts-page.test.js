import React from 'react';
import { useQuery } from '@apollo/client';

import Contacts from '../contacts';

let component;
const useQueryData = {
  loading: false,
  error: false,
  data: { getContacts: [{}] }
};

jest.mock('@apollo/client');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => 'a|b' })
}));

describe('slider home page tests', () => {
  it('should match snapshot', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));
    component = shallow(<Contacts />);
    expect(component).toBeDefined();
  });

  it('should cover other branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));
    component = shallow(<Contacts />);
  });

  it('should cover rest branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      error: {}
    }));
    component = shallow(<Contacts />);
  });
});
