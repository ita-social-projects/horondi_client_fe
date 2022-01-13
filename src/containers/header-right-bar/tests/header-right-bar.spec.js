import React from 'react';

import HeaderRightBar from '../header-right-bar';

jest.mock('../header-right-bar.styles.js', () => ({
  useStyles: () => ({})
}));

describe('SearchBar component tests', () => {
  it('Should render SearchBar component', () => {
    const component = shallow(<HeaderRightBar fromSideBar='' setIsMenuOpen={() => null} />);

    expect(component).toBeDefined();
  });
});
