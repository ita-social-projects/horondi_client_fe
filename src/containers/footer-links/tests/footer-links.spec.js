import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FooterLinks from '../footer-links';

Enzyme.configure({ adapter: new Adapter() });

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
