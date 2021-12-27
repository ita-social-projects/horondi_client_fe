import React from 'react';
import AuthWrapper from '../auth-form-wrapper';

jest.mock('../auth-form-wrapper.styles', () => ({
  useStyles: () => ({})
}));

describe('Wrapper  component render  tests', () => {
  it('Should render Wrapper', () => {
    const component = shallow(<AuthWrapper />);
    expect(component).toBeDefined();
    expect(component.type()).toBe('div');
  });
});
