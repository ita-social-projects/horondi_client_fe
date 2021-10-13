import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelfPickup from '../self-pickup';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../self-pickup.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

const props = {
  isLightTheme: 'light',
  language: 0
};

describe('SelfPickup component tests', () => {
  it('should render SelfPickup', () => {
    const wrapper = shallow(<SelfPickup {...props} />);
    expect(wrapper).toBeDefined();
  });
  it('should change props', () => {
    const wrapper = shallow(<SelfPickup isLightTheme='dark' language='1' />);
    expect(wrapper).toBeDefined();
  });
});
