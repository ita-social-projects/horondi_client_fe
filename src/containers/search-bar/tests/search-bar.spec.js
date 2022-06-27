import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mocks, TestWrapper } from './search-bar.variables';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => 'searchBarPlaceholder',
    i18n: { changeLanguage: jest.fn() }
  })
}));

jest.mock('../search-bar.styles.js', () => ({
  useStyles: () => ({})
}));

describe('search-bar testing', () => {
  const targetValue = 'banana';

  beforeEach(() => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TestWrapper />
      </MockedProvider>
    );
  });

  test('shoud render searchBar with initial props', () => {
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('searchBarPlaceholder')).toBeInTheDocument();
  });

  test('shoud appear element with queried data', async () => {
    act(() => {
      fireEvent.change(screen.getByPlaceholderText('searchBarPlaceholder'), {
        target: { value: targetValue }
      });
    });
    const element = await screen.findByTestId(targetValue);
    expect(element.textContent).toBe('1');
  });

  test('should element with data disappear on blur and appear on focus', async () => {
    act(() => {
      fireEvent.change(screen.getByPlaceholderText('searchBarPlaceholder'), {
        target: { value: targetValue }
      });
    });
    act(() => {
      fireEvent.focusOut(screen.getByPlaceholderText('searchBarPlaceholder'));
    });

    expect(screen.queryByTestId(targetValue)).not.toBeInTheDocument();

    act(() => {
      fireEvent.focusIn(screen.getByPlaceholderText('searchBarPlaceholder'));
    });

    const element = await screen.findByTestId(targetValue);
    expect(element.textContent).toBe('1');
  });

test('should clear input when click on icon click', () => {
  act(() => {
    fireEvent.change(screen.getByPlaceholderText('searchBarPlaceholder'), {
      target: { value: targetValue }
    });
  });
  act(() => {
    fireEvent.click(screen.getByTestId('clear-icon'));
  }); 
  const inputValue = screen.getByPlaceholderText('searchBarPlaceholder');
  expect(inputValue.value).toBe('');
});

});

