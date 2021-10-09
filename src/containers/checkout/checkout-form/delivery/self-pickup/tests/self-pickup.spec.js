import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelfPickup from '../self-pickup';
// import useStyles from '../self-pickup.styles'

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../self-pickup.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

const props = {
  isLightTheme: 'light',
  language: 0
};

describe('SelfPickup component tests', () => {
  it('Should render SelfPickup', () => {
    const wrapper = shallow(<SelfPickup {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('Should render ', () => {
    const wrapper = shallow(<SelfPickup {...props} />);
    const actual = wrapper.find('h5').first().text();
    const expected = 'Графік роботи:';
    expect(actual).toEqual(expected);
  });
  it('3 ', () => {
    const wrapper = shallow(<SelfPickup isLightTheme='dark' language='1' />);
    // expect(wrapper.find({ language: '1' })).toHaveLength(1);
    // expect(wrapper.find({ prop: '1' })).toEqual(true);
    // expect(wrapper.find('h5').first().prop('className')).toEqual(true);
    expect(wrapper).toBeDefined();
  });
  // it('3 ', () => {
  //     const wrapper = shallow(
  //         <SelfPickup {...props} />
  //     );
  //     let containerStyle = wrapper.get(0).style;
  //     console.log(wrapper.get(0))
  //     expect(containerStyle).to.have.property('opacity', '1');
  // });
});
