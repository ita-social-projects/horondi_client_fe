import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Delivery from '../delivery';
import Courier from '../courier/courier';
import NovaPost from '../nova-post';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Delivery deliveryType='NOVAPOSTCOURIER' isLightTheme />);
});

describe('Delivery component tests', () => {
  it('should render one <Courier>', () => {
    expect(wrapper.find(Courier)).toHaveLength(1);
  });
  it('should render zero <NovaPost>', () => {
    expect(wrapper.find(NovaPost)).toHaveLength(0);
  });
  // it('should render zero <NovaPost>', () => {
  //     wrapper = shallow(<Delivery deliveryType='NOVAPOSTCOURIER' isLightTheme={false} />);
  //     expect(wrapper.find(Courier)).toHave;
  // });
  it('should handle change', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
