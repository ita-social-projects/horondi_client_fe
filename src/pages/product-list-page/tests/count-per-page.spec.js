import React from 'react';
import CountPerPage from '../count-per-page/count-per-page';

jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));
jest.mock('../count-per-page/count-per-page.styles.js', () => ({
  useStyles: () => ({})
}));

describe('Recovery component tests', () => {
  it('Should render Recovery', () => {
    const component = shallow(<CountPerPage />);
    expect(component).toBeDefined();
  });
});
