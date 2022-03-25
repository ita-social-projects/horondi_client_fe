import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NumberInput from '../number-input';

const onChangeQuantity = jest.fn(() => {});
const setInputValue = jest.fn(() => {});

describe('Number input block test', () => {
  const mockQuantity = 1;

  beforeEach(() => {
    render(
      <NumberInput
        onChangeQuantity={onChangeQuantity}
        setInputValue={setInputValue}
        quantity={mockQuantity}
      />
    );
  });

  test('Test decrement fn disabeld', () => {
    const decrementBtn = screen.getByTestId('decrement');
    const text = screen.getByDisplayValue('1');

    expect(text).toHaveValue('1');
    fireEvent.click(decrementBtn);
    expect(setInputValue).toHaveBeenCalledTimes(0);
  });

  test('Test increment fn works', () => {
    const incrementBtn = screen.getByTestId('increment');

    fireEvent.click(incrementBtn);
    expect(setInputValue).toHaveBeenCalledTimes(1);
  });

  test('Test increment fn works two times', () => {
    const incrementBtn = screen.getByTestId('increment');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(setInputValue).toHaveBeenCalledTimes(2);
  });

  test('Test textField change', () => {
    const text = screen.getByDisplayValue('1');

    expect(text).toHaveValue('1');
    fireEvent.change(text, { target: { value: 2 } });
    expect(text).toHaveValue('2');
  });
});

describe('Number input block increment disabled', () => {
  const mockQuantity = 1000;

  beforeEach(() => {
    render(
      <NumberInput
        onChangeQuantity={onChangeQuantity}
        setInputValue={setInputValue}
        quantity={mockQuantity}
      />
    );
  });

  test('Test increment fn disabled', () => {
    const incrementBtn = screen.getByTestId('increment');

    fireEvent.click(incrementBtn);
    expect(setInputValue).toHaveBeenCalledTimes(0);
  });

  test('Test decrement click two times', () => {
    const decrementBtn = screen.getByTestId('decrement');

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    expect(setInputValue).toHaveBeenCalledTimes(2);
  });
});
