import React from 'react';
import { useQuery } from '@apollo/client';
import { ThemeProvider } from '@material-ui/styles';
import ProductListPage from '../../../../pages/product-list-page/product-list-page';
import ProductListItem from '../../../../pages/product-list-page/product-list-item/product-list-item';
import { theme } from '../../../../components/app/app-theme/app.theme';

const useQueryData = {
  loading: false,
  error: null,
  data: {
    getProducts: {
      items: [
        {
          _id: '1',
          name: [
            { lang: 'ua', value: 'Ролтоп' },
            { lang: 'en', value: 'Rolltop' }
          ]
        },
        {
          _id: '2',
          name: [
            { lang: 'ua', value: 'test' },
            { lang: 'en', value: 'test' }
          ]
        },
        {
          _id: '3',
          name: [
            { lang: 'ua', value: 'test' },
            { lang: 'en', value: 'test' }
          ]
        }
      ]
    }
  }
};

let mockedNameFilter;

jest.mock('react-redux');
jest.mock('../../../../pages/product-list-page/product-list-page.styles', () => ({
  useStyles: () => ({})
}));

jest.mock(
  '../../../../pages/product-list-page/product-list-filter/product-list-filter.styles',
  () => ({
    useStyles: () => ({})
  })
);

jest.mock('../../../../pages/product-list-page/count-per-page/count-per-page.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('@apollo/client');
jest.mock('react-router', () => ({
  useLocation: () => ({ search: `?countPerPage=9&sort=popularity&nameFilter=${mockedNameFilter}` }),
  useHistory: () => ({
    push: jest.fn()
  })
}));

jest.mock('connected-react-router', () => ({
  push: jest.fn()
}));

jest.mock('react-redux', () => ({
  useSelector: () => ({ currency: 0 })
}));

describe('ProductListPage component tests', () => {
  const themeValue = theme('light');

  it('Should render ProductListPage', () => {
    useQuery.mockImplementation(() => ({ loading: false, error: false }));

    const component = shallow(<ProductListPage width='sm' />);

    expect(component).toBeDefined();
  });

  it('Should cover other branches', () => {
    useQuery.mockImplementation(() => ({ loading: true, error: false }));

    const component = mount(<ProductListPage width='sm' />);

    expect(component).toBeDefined();
  });

  it('Should cover other branches', () => {
    mockedNameFilter = 'wrong_name';
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    const component = mount(
      <ThemeProvider theme={themeValue}>
        <ProductListPage width='sm' />
      </ThemeProvider>
    );
    const items = component.find(ProductListItem);

    expect(items).toHaveLength(0);
  });
});
