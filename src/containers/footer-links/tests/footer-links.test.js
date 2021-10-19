import React from 'react';
import FooterLinks from '../footer-links';

jest.mock('react-redux');
jest.mock('../footer-links.styles', () => ({ useStyles: () => ({}) }));

describe('Footer links tests', () => {
  const wrapper = shallow(<FooterLinks />);

  it('should render footer list', () => {
    expect(wrapper).toBeDefined();
  });
});
