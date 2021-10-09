import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shallow } from 'enzyme';

import Confirmation from '../confirmation';

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
