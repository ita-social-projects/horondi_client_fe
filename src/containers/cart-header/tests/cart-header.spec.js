import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CartHeader from '../cart-header';
import CartIcon from '../CartIcon';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useMemo: (cb) => cb()
}));

jest.mock('../cart-header.styles.js', () => ({
  useStyles: () => ({})
}));

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const store = createStore(() => [], {});

describe('Currency component', () => {
  it('Should render the component', () => {
    useSelectorMock.mockReturnValue({ cartItems: [] });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartHeader />
        </BrowserRouter>
      </Provider>
    );
  });
});

describe('SearchBar component tests', () => {
  it('Should render CartIcon component', () => {
    const component = shallow(<CartIcon />);
    expect(component).toBeDefined();
  });
});
