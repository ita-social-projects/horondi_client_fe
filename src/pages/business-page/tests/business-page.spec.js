import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { getBusinessTextByCode } from '../operations/business-page.queries';
import BusinessPage from '../business-page';

const mockData = {
  params: {
    page: 'about-us'
  }
};

const mocks = [
  {
    request: {
      query: getBusinessTextByCode,
      variables: {
        code: 'about-us'
      }
    },
    result: {
      data: {
        getBusinessTextByCode: {
          __typename: 'BusinessText',
          _id: '5fa034039a59a906f0610e37',
          code: 'about-us',
          title: [
            {
              value: 'Про нас '
            },
            {
              value: 'About Us'
            }
          ],
          text: [
            {
              value:
                '<h3>Сашко Горонді</h3><img class="editor-img" src="https://horondi.blob.core.windows.net/horondi/images/small_519cbe8km3uwo4a_IMG_0120.jpg" alt="IMG_0120.jpg" width="150px"><img class="editor-img" src="https://horondi.blob.core.windows.net/horondi/images/small_519cbe8km3uwo4b_IMG_0428.jpg" alt="IMG_0428.jpg" width="150px">'
            },
            {
              value:
                '<h3>Sashko Horondi</h3><img class="editor-img" src="https://horondi.blob.core.windows.net/horondi/images/small_519cbe8km3v4htv_IMG_0120.jpg" alt="IMG_0120.jpg" width="150px"><img class="editor-img" src="https://horondi.blob.core.windows.net/horondi/images/small_519cbe8km3v4htw_IMG_0428.jpg" alt="IMG_0428.jpg" width="150px">'
            }
          ],
          date: '1604334592591'
        }
      }
    }
  }
];

beforeEach(() => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <BusinessPage match={mockData} />
    </MockedProvider>
  );
});

it('should render the transmitted text', async () => {
  expect(screen.queryByText('Sashko Horondi')).toBeNull();
  expect(await screen.findByText('Sashko Horondi')).toBeInTheDocument();
});

it('should render transmitted images', async () => {
  expect(await screen.findAllByAltText(/img/i)).toHaveLength(2);
});
