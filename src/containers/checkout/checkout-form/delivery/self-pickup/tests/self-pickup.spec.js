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

  it('should find first element text', () => {
    const wrapper = shallow(<SelfPickup {...props} />);
    const actual = wrapper.find('h5').first().text();
    const expected = 'Графік роботи:';
    expect(actual).toEqual(expected);
  });
  it('should change props', () => {
    const wrapper = shallow(<SelfPickup isLightTheme='dark' language='1' />);
    expect(wrapper).toBeDefined();
  });
});
