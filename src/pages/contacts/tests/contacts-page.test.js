import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import Contacts from '../contacts';

jest.mock('react-redux');
jest.mock('../contacts.styles', () => ({
  useStyles: () => ({})
}));

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  loading: false,
  contacts: []
}));

describe('<Contacts/>', () => {
  it('should render contacts', () => {
    const component = shallow(<Contacts />);
    expect(component).toBeDefined();
  });

  it('should render page title if fromCheckout is false', () => {
    const component = shallow(<Contacts fromCheckout={false} />);
    const pageTitle = component.find('h2');
    expect(pageTitle.length).toBe(1);
  });

  it('shouldn`t render page title if fromCheckout is true', () => {
    const component = shallow(<Contacts fromCheckout />);
    const pageTitle = component.find('h2');
    expect(pageTitle.length).toBe(0);
  });
});
