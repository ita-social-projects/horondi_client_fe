import React from 'react';
import { shallow } from 'enzyme';
import Detail from '../detail';

jest.mock('../detail.styles', () => ({
  useStyles: () => ({})
}));

describe('Detail component', () => {
  it('Should render', () => {
    const component = shallow(<Detail />);
    expect(component.exists('span')).toBe(true);
  });
});
