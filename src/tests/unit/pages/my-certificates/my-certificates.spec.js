import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import MyCertificates from '../../../../pages/my-certificates/my-certificates';
import { certificateMock1, certificateMock2, certificateMock3 } from './my-certificates.variables';

jest.mock('../../../../pages/my-certificates/my-certificates.styles', () => ({
  useStyles: () => ({})
}));

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
    const element = screen.getAllByText(/XYQ332765/i);

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
    const element = screen.getByText(/certificate.emptyTitle/i);

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
    const nextPageButton = document.querySelector('[aria-label="Go to page 2"]');
    fireEvent.click(nextPageButton);

    waitForElement(() => {
      expect(document.querySelector('[aria-current="true"]')).toHaveTextContent('2');
    });
  });
});
