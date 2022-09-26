import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import MyCertificates from '../../../../pages/my-certificates/my-certificates';
import {
  certificateMock1,
  certificateMock2,
  certificateMock3,
  certificateMock4
} from './my-certificates.variables';

jest.mock(
  '../../../../containers/my-certificates/filled-certificates/filled-certificates.styles',
  () => ({
    useStyles: () => ({})
  })
);

jest.mock(
  '../../../../containers/my-certificates/empty-certificates/empty-certificates.styles',
  () => ({
    useStyles: () => ({})
  })
);

jest.mock(
  '../../../../containers/my-certificates/certificate-table/certificate-table.styles.js',
  () => ({
    useStyles: () => ({})
  })
);

jest.mock(
  '../../../../containers/my-certificates/cetrificate-item/certificate-item.styles.js',
  () => ({
    useActiveStyles: () => ({}),
    useNotActiveStyles: () => ({})
  })
);

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

describe('MyCertificates test', () => {
  it('should render two certificates', async () => {
    render(
      <MockedProvider mocks={[certificateMock1]} addTypename={false}>
        <Router>
          <MyCertificates />
        </Router>
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    const element = await screen.findAllByText(/XYQ332765/i);

    expect(element).toHaveLength(2);
  });
  it('should render title', async () => {
    render(
      <MockedProvider mocks={[certificateMock2]} addTypename={false}>
        <Router>
          <MyCertificates />
        </Router>
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    const element = await screen.findByText(/certificate.title/i);

    expect(element).toBeInTheDocument();
    cleanup();
  });
  it('should change page', async () => {
    render(
      <MockedProvider mocks={[certificateMock3]} addTypename={false}>
        <Router>
          <MyCertificates />
        </Router>
      </MockedProvider>
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
      <MockedProvider mocks={[certificateMock4]} addTypename={false}>
        <Router>
          <MyCertificates />
        </Router>
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    waitForElement(() => {
      expect(document.querySelector('[aria-current="true"]')).toHaveTextContent('0');
    });
  });
});
