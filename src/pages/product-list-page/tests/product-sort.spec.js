import React from 'react';
import ProductSort from '../product-sort/product-sort';

const mockHistoryPush = jest.fn();

jest.mock('../count-per-page/count-per-page.styles', () => ({
  useStyles: () => ({ theme: { palette: { button: { hover: { color: '' } } } } })
}));

jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

jest.mock(
  '../../../containers/search-bar/search-bar',
  () =>
    function SearchBar() {
      return <div>SearchBar</div>;
    }
);

const selectValue = { name: 'popularity', value: -1 };

describe('ProductSort component tests', () => {
  it('Should render ProductSort', () => {
    const component = shallow(<ProductSort />);
    expect(component).toBeDefined();
  });

  it('Should change selected value', () => {
    const component = mount(<ProductSort />);
    const select = component.find(`[name='sortType']`);
    select
      .at(0)
      .props()
      .onChange({ target: { value: selectValue } });
    expect(select.at(0).props().value).toEqual(selectValue);
  });
});
