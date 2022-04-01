import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import NumberInput from '../../../../components/number-input/number-input';

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

  test('increment button changes value for textfild input', async () => {
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

  test('textField changes when value is typed', () => {
    const text = screen.getByTestId('text');
    fireEvent.change(text, { target: { value: 2 } });
    expect(text).toHaveValue('2');
  });
});

describe('Test increment button changes value fon textfild input', () => {
  let mockQuantity = 2;
  let rerender;
  const onChangeQuantity = jest.fn(() => {});
  const setInputValue = jest.fn(() => {
    mockQuantity -= 1;
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

  test('decrement button changes value for the text input', async () => {
    const setInputValue = jest.fn(() => {});
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
