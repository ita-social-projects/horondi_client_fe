import React from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import { MailForm } from '../mail-form';
import { mockedCartItemsData } from '../../../../tests/unit/components/your-order/your-order.variables';

jest.mock('../../chat.style.js', () => ({ useStyles: () => ({}) }));
jest.mock('@apollo/client');

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));
useMutation.mockImplementation(() => [
  jest.fn(),
  {
    loading: false,
    error: null,
    data: { sendEmailMutation: [{ addEmailQuestion: { question: { senderName: 'name' } } }] }
  }
]);

const userData = {
  cartItems: mockedCartItemsData,
  cartLoading: false
};

const props = {
  cancelIconHandler: jest.fn(),
  contacts: [
    {
      _id: '234',
      phoneNumber: '0690000000',
      email: 'test@gmail.com'
    }
  ],
  themeMode: true
};

describe('<MailForm />', () => {
  it('should render SendButton', () => {
    useSelector.mockImplementation(() => userData);
    render(<MailForm {...props} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should render 3 inputs', () => {
    render(<MailForm {...props} />);
    const inputs = document.querySelectorAll('input');
    const spans = document.querySelectorAll('span');
    expect(inputs.length).toBe(2);
    expect(spans.length).toBe(12);
  });
  it('should render phoneNumber & email', () => {
    const { getByText } = render(<MailForm {...props} />);
    const phone = getByText(/069000000/i);
    const email = getByText(/test@gmail.com/i);
    expect(phone).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
