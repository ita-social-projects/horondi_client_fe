import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@material-ui/styles';
import MyCertificates from '../../../../pages/my-certificates/my-certificates';
import {
  mockStore,
  certificateMock1,
  certificateMock2,
  certificateMock3,
  certificateMock4
} from './my-certificates.variables';
import { theme } from '../../../../components/app/app-theme/app.theme';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => mockStore
}));

const themeValue = theme('light');

describe('MyCertificates test', () => {
  it('should render two certificates', async () => {
    render(
      <ThemeProvider theme={themeValue}>
        <MockedProvider mocks={[certificateMock1]} addTypename={false}>
          <Router>
            <MyCertificates />
          </Router>
        </MockedProvider>
      </ThemeProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    const element = await screen.findAllByText(/XYQ332765/i);

    expect(element).toHaveLength(2);
  });
  it('should render title', async () => {
    render(
      <ThemeProvider theme={themeValue}>
        <MockedProvider mocks={[certificateMock2]} addTypename={false}>
          <Router>
            <MyCertificates />
          </Router>
        </MockedProvider>
      </ThemeProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    const element = await screen.findByText(/certificate.title/i);

    expect(element).toBeInTheDocument();
    cleanup();
  });
  it('should change page', async () => {
    render(
      <ThemeProvider theme={themeValue}>
        <MockedProvider mocks={[certificateMock3]} addTypename={false}>
          <Router>
            <MyCertificates />
          </Router>
        </MockedProvider>
      </ThemeProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    const nextPageButton = await screen.findByLabelText('Go to page 2');
    fireEvent.click(nextPageButton);

    waitForElement(() => {
      expect(document.querySelector('[aria-current="true"]')).toHaveTextContent('2');
    });
  });
  it('should change page when items array are empty', async () => {
    render(
      <ThemeProvider theme={themeValue}>
        <MockedProvider mocks={[certificateMock4]} addTypename={false}>
          <Router>
            <MyCertificates />
          </Router>
        </MockedProvider>
      </ThemeProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    waitForElement(() => {
      expect(document.querySelector('[aria-current="true"]')).toHaveTextContent('0');
    });
  });
});
