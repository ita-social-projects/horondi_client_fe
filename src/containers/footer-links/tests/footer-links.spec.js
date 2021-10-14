import React from 'react';
import FooterLinks from '../footer-links';

jest.mock('../footer-links.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

const props = {
  showTitle: '',
  socialIconsStyles: '',
  position: '',
  setIsMenuOpen: true
};

describe('FooterLinks component tests', () => {
  it('should render <FooterLinks />', () => {
    const wrapper = shallow(<FooterLinks {...props} />);
    expect(wrapper.props().onClick).toEqual(true);
  });
});
