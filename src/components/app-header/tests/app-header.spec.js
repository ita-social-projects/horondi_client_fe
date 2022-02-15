import React from 'react';
import { Switch } from '@material-ui/core';
import AppHeader from '../app-header';

jest.mock('../app-header.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('../../app/app.styles', () => ({
  useAppStyles: () => ({})
}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [true, () => null],
  useEffect: (cb) => cb(),
  useContext: () => [true, () => null]
}));

let wrapper;

describe('Test for the app-header component', () => {
  it('It should simulate click on switch in the app-header component', () => {
    wrapper = shallow(<AppHeader />);
    const switchTheme = wrapper.find(Switch);
    switchTheme.simulate('click', {
      target: {
        checked: true
      }
    });
    expect(wrapper).toBeDefined();
  });
});
