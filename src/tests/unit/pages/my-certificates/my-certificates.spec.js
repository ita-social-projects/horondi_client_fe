import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import MyCertificates from '../../../../pages/my-certificates/my-certificates';
import { getAllCertificates } from '../../../../pages/my-certificates/operations/my-certificates.queries';

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
    const certificateMock = {
      request: {
        query: getAllCertificates,
        variables: {
          limit: 5,
          skip: 0
        }
      },
      result: {
        data: {
          getAllCertificates: {
            items: [
              {
                code: 'XYQ332765',
                dateEnd: '2022-11-08T18:22:16.417Z',
                dateStart: '2021-11-08T18:22:16.417Z',
                isActive: true,
                isUsed: false,
                name: 'FreeHorondi',
                value: 1500,
                _id: '61f3fd57b0b726cad2944501'
              },
              {
                code: 'XYQ332765',
                dateEnd: '2022-11-08T18:22:16.417Z',
                dateStart: '2021-11-08T18:22:16.417Z',
                isActive: true,
                isUsed: false,
                name: 'FreeHorondi',
                value: 1500,
                _id: '61f3fd57b0b726cad2944501'
              }
            ],
            count: 2
          }
        }
      }
    };

    render(
      <MockedProvider mocks={[certificateMock]} addTypename={false}>
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
    const certificateMock = {
      request: {
        query: getAllCertificates,
        variables: {
          limit: 5,
          skip: 0
        }
      },
      result: {
        data: {
          getAllCertificates: {
            items: [
              {
                code: 'XYQ332765',
                dateEnd: '2022-11-08T18:22:16.417Z',
                dateStart: '2021-11-08T18:22:16.417Z',
                isActive: true,
                isUsed: false,
                name: 'FreeHorondi',
                value: 1500,
                _id: '61f3fd57b0b726cad2944501'
              },
              {
                code: 'XYQ332765',
                dateEnd: '2022-11-08T18:22:16.417Z',
                dateStart: '2021-11-08T18:22:16.417Z',
                isActive: true,
                isUsed: false,
                name: 'FreeHorondi',
                value: 1500,
                _id: '61f3fd57b0b726cad2944501'
              }
            ],
            count: 2
          }
        }
      }
    };
    render(
      <MockedProvider mocks={[certificateMock]} addTypename={false}>
        <Router>
          <MyCertificates />
        </Router>
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    const element = screen.getByText(/certificate.emptyTitle/i);
    expect(element).toBeInTheDocument();
  });
});
