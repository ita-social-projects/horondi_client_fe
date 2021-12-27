import React from 'react';
import AuthHeading from '../auth-form-heading';

jest.mock('../auth-form-heading.styles', () => ({
  useStyles: () => ({})
}));

describe('Headinf component render  tests', () => {
  it('Should render Heading', () => {
    const component = shallow(<AuthHeading>Heading</AuthHeading>);
    expect(component).toBeDefined();
    expect(component.text().includes('Heading')).toBe(true);
    expect(component.type()).toBe('h4');
  });
});
