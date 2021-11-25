import React from 'react';
import SocialLinks from '../social-links';

jest.mock('react-redux');
jest.mock('../footer-links.styles', () => ({ useStyles: () => ({}) }));

describe('Social links tests', () => {
  const wrapper = shallow(<SocialLinks />);

  it('should render social links', () => {
    expect(wrapper).toBeDefined();
  });
});
