import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThemeComponent from '../theme-component';
import ThemeContext from '../../../context/theme-context';
import { setToLocalStorage } from '../../../services/local-storage.service';

jest.mock('../../../services/local-storage.service');

const themeContextProviderMockValues = [true, jest.fn(() => {})];
let container; let getByTestId; let getByRole; let rerender;

describe('Theme component', () => {
  beforeEach(
    () =>
      ({ container, getByTestId, getByRole, rerender } = render(
        <ThemeContext.Provider value={themeContextProviderMockValues}>
          <ThemeComponent />
        </ThemeContext.Provider>
      ))
  );
  it('Shoud render the component ', () => {
    expect(container.querySelectorAll('p').length).toBe(2);
    expect(getByRole('checkbox')).toBeDefined();
  });
  it('Should execute function setLightMode when you click on swithc theme toggler', () => {
    fireEvent.click(getByTestId('switch-theme'));
    expect(themeContextProviderMockValues[1]).toHaveBeenCalledTimes(1);
  });
  it('Should execute function setToLocalStorage whith dark theme params after click', () => {
    const darkEtalonParams = ['theme', 'dark'];
    fireEvent.click(getByTestId('switch-theme'));
    expect(setToLocalStorage).toHaveBeenCalledWith(...darkEtalonParams);
  });
  it('Should execute function setToLocalStorage whith light theme params after click', () => {
    const contextProviderMockValues = [false, jest.fn(() => {})];
    rerender(
      <ThemeContext.Provider value={contextProviderMockValues}>
        <ThemeComponent />
      </ThemeContext.Provider>
    );
    const lightEtalonParams = ['theme', 'light'];
    fireEvent.click(getByTestId('switch-theme'));
    expect(setToLocalStorage).toHaveBeenCalledWith(...lightEtalonParams);
  });
});
