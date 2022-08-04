import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartHeader from '../cart-header';

jest.mock('../cart-header.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux', () => ({
  useDispatch: () => () => null,
  useSelector: () => [{ quantity: 1 }]
}));

describe('CartHeader', () => {
  it('should consist 1 item in <Badge />', () => {
    render(
      <BrowserRouter>
        <CartHeader />
      </BrowserRouter>
    );
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
