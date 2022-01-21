import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { useQuery } from '@apollo/client';
import MyCertificates from '../../../../pages/my-certificates/my-certificates';

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

jest.mock('@apollo/client');

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

const props = {
  items: [
    {
      _id: '61e2aea9e07b826a945d45f8',
      value: 500,
      isActive: true,
      isUsed: false,
      name: 'FreeHorondi',
      dateStart: '2021-01-10T18:22:16.417Z',
      dateEnd: '2022-01-11T18:22:16.417Z',
      code: 'HOR22075'
    },
    {
      _id: '61e2aedde07b826a945d45f9',
      value: 1000,
      isActive: false,
      isUsed: false,
      name: 'FreeHorondi',
      dateStart: '2020-12-30T18:22:16.417Z',
      dateEnd: '2021-12-31T18:22:16.417Z',
      code: 'HDQ37569'
    }
  ]
};

const getCertificatesQuery = {
  loading: false,
  error: false,
  data: {
    getAllCertificates: {
      items: [{}, {}]
    }
  }
};
useQuery.mockImplementation(() => ({
  ...getCertificatesQuery
}));

describe('MyCertificates component test', () => {
  it('should render MyCertificates component', () => {
    const wrapper = render(
      <Router>
        <MyCertificates {...props} />
      </Router>
    );

    screen.debug();

    expect(wrapper).toBeDefined();
  });

  it('should render component title', () => {
    render(
      <Router>
        <MyCertificates {...props} />
      </Router>
    );

    const title = screen.getByText(/certificate.title/i);

    expect(title).toBeInTheDocument();
  });
});
