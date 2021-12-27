import React from 'react';
import AuthButton from '../auth-form-button';

jest.mock('../auth-form-button.styles', () => ({
  useStyles: () => ({})
}));

describe('Button  component render  tests', () => {
  it('Should render Wrapper', () => {
    const component = shallow(<AuthButton>enter</AuthButton>);
    expect(component).toBeDefined();
    expect(component.text().includes('enter')).toBe(true);
  });
});
