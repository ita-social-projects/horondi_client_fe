import React from 'react';
import CartIcon from '../CartIcon';

jest.mock('../cart-header.styles.js', () => ({
  useStyles: () => ({})
}));

describe('SearchBar component tests', () => {
  it('Should render CartIcon component', () => {
    const component = shallow(<CartIcon />);
    expect(component).toBeDefined();
  });
});
