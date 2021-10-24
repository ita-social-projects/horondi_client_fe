import React from 'react';
import Delivery from '../delivery';
import Courier from '../courier/courier';
import NovaPost from '../nova-post';
import SelfPickup from '../self-pickup';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Delivery deliveryType='NOVAPOSTCOURIER' />);
});

describe('Delivery component tests', () => {
  it('should render one <Courier>', () => {
    expect(wrapper.find(Courier)).toHaveLength(1);
  });
  it('should render zero <NovaPost>', () => {
    expect(wrapper.find(NovaPost)).toHaveLength(0);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render one <SelfPickup />', () => {
    const wrapper = shallow(<Delivery deliveryType='SELFPICKUP' />);
    expect(wrapper.find(SelfPickup)).toHaveLength(1);
  });
});
