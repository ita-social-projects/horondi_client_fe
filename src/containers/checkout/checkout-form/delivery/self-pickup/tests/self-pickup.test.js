import React from 'react';
import SelfPickup from '../self-pickup';

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
