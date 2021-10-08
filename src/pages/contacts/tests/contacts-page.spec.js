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
  loading: true,
  contacts: []
}));

let wrapper;

describe('Contacts is valid', () => {
  it('Should render contacts', () => {
    wrapper = shallow(<Contacts />);

    expect(wrapper).toBeDefined();
  });
});
