import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import NumberInput from '../number-input';

describe('Number input block test', () => {
  let mockQuantity = 1;
  let rerender;
  const onChangeQuantity = jest.fn(() => {});
  const setInputValue = jest.fn(() => {
    mockQuantity += 1;
  });

  beforeEach(() => {
    ({ rerender } = render(
      <NumberInput
        onChangeQuantity={onChangeQuantity}
        setInputValue={setInputValue}
        quantity={mockQuantity}
      />
    ));
  });

  test('Test increment fn works', async () => {
    const incrementBtn = screen.getByTestId('increment');
    const decrementBtn = screen.getByTestId('decrement');
    const text = screen.getByTestId('text');
    expect(decrementBtn).toHaveAttribute('disabled');
    fireEvent.click(incrementBtn);

    rerender(
      <NumberInput
        onChangeQuantity={onChangeQuantity}
        setInputValue={setInputValue}
        quantity={mockQuantity}
      />
    );

    act(() => {
      expect(text.value).toBe('2');
    });
  });

  test('Test textField change', () => {
    const text = screen.getByTestId('text');
    fireEvent.change(text, { target: { value: 2 } });
    expect(text).toHaveValue('2');
  });
});

describe('Test decrement', () => {
  let mockQuantity = 2;
  let rerender;
  const onChangeQuantity = jest.fn(() => {
    mockQuantity -= 1;
  });
  const setInputValue = jest.fn(() => {});

  beforeEach(() => {
    ({ rerender } = render(
      <NumberInput
        onChangeQuantity={onChangeQuantity}
        setInputValue={setInputValue}
        quantity={mockQuantity}
      />
    ));
  });

  test('Test decrement fn works', async () => {
    const decrementBtn = screen.getByTestId('decrement');
    const text = screen.getByTestId('text');
    fireEvent.click(decrementBtn);

    rerender(
      <NumberInput
        onChangeQuantity={onChangeQuantity}
        setInputValue={setInputValue}
        quantity={mockQuantity}
      />
    );

    act(() => {
      expect(text.value).toBe('1');
    });
  });
});
