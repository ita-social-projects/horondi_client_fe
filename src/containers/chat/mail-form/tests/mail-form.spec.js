import React from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import { MailForm } from '../mail-form';
import { mockedCartItemsData } from '../../../../tests/unit/components/your-order/your-order.variables';
import { theme } from '../../../../components/app/app-theme/app.theme';

jest.mock('@apollo/client');
jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

const themeValue = theme('light');
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
  themeMode: true
};

describe('<MailForm />', () => {
  it('should render SendButton', () => {
    useSelector.mockImplementation(() => userData);
    render(
      <ThemeProvider theme={themeValue}>
        <MailForm {...props} />
      </ThemeProvider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should render 3 inputs', () => {
    render(
      <ThemeProvider theme={themeValue}>
        <MailForm {...props} />
      </ThemeProvider>
    );
    const inputs = document.querySelectorAll('input');
    const spans = document.querySelectorAll('span');
    expect(inputs.length).toBe(2);
    expect(spans.length).toBe(9);
  });
});
