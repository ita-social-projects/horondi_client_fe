import React from 'react';
import { useSelector } from 'react-redux';
import SideBarItem from '../sidebar-item';

jest.mock('../sidebar-items.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');

useSelector.mockImplementation(() => ({
  quantityPerPage: 4
}));

describe('SideBarItem component tests', () => {
  it('Should render SideBarItem', () => {
    const component = shallow(
      <SideBarItem
        category=''
        name={[
          {
            value: ''
          },
          {
            value: ''
          }
        ]}
        mainItemStyles=''
        key=''
        models={[]}
        handlerItem=''
      />
    );
    expect(component).toBeDefined();
  });
});
