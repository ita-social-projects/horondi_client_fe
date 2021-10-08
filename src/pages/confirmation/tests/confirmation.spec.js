import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useDispatch, useSelector } from 'react-redux';

import Confirmation from '../confirmation';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux');
jest.mock('../confirmation.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('connected-react-router', () => ({
  push: 0
}));

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  loading: true,
  error: ''
}));

describe('Confirmation is valid', () => {
  it('Should render сonfirmation', () => {
    const component = shallow(<Confirmation />);

    expect(component).toBeDefined();
  });
});
