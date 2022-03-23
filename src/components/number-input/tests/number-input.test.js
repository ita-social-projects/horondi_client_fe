import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NumberInput from '../number-input';

const Wrapper = () => {
  const [quantit, setQuantit] = React.useState(1);
  const onChangeQuantity = (quantity) => setQuantit(quantity);
  const setInputValue = (quantity) => setQuantit(quantity);

  return (
    <div>
      <NumberInput
        onChangeQuantity={onChangeQuantity}
        setInputValue={setInputValue}
        quantity={quantit}
      />
    </div>
  );
};
describe('Number input block test', () => {
  test('Test increment', () => {
    render(<Wrapper />);
    const incrementBtn = screen.getByTestId('increment');
    const text = screen.getByDisplayValue('1');
    expect(text).toHaveValue('1');
    fireEvent.click(incrementBtn);
    expect(text).toHaveValue('2');
  });
  test('Test decrement', () => {
    render(<Wrapper />);
    const decrementBtn = screen.getByTestId('decrement');
    const text = screen.getByDisplayValue('1');
    expect(text).toHaveValue('1');
    fireEvent.click(decrementBtn);
    expect(text).toHaveValue('1');
  });
  test('Test input manual', () => {
    render(<Wrapper />);
    const decrementBtn = screen.getByTestId('decrement');
    const text = screen.getByDisplayValue('1');
    expect(text).toHaveValue('1');
    fireEvent.click(decrementBtn);
    fireEvent.change(text, { target: { value: 2 } });
    expect(text).toHaveValue('2');
  });
});
