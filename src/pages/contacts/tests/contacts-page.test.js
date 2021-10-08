import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useDispatch, useSelector } from 'react-redux';
import Contacts from '../contacts';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux');
jest.mock('../contacts.styles', () => ({
  useStyles: () => ({})
}));

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  language: 0,
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
