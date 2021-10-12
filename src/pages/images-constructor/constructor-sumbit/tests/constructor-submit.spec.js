import React from 'react';
import ConstructorSubmit from '../constructor-submit';

jest.mock('../constructor-submit.styles', () => ({
  useStyles: () => ({})
}));

let wrapper;

describe('ConstructorSubmit component tests', () => {
  wrapper = shallow(<ConstructorSubmit />);

  it('Should render ConstructorSubmit', () => {
    expect(wrapper).toBeDefined();
  });
});
