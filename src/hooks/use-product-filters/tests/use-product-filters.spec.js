import { renderHook, act } from '@testing-library/react-hooks';
import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { mocks } from './use-product-filters.variables';
import useProductFilters from '../use-product-filters';

jest.mock('react-router', () => ({
  useLocation: jest.fn(() => ({
    search: '?page=1&sort=popularity&countPerPage=9&priceFilter=800%2C3600'
  })),
  useHistory: jest.fn(() => ({ push: jest.fn() }))
}));

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(() => ({
    t: () => 'Category',
    i18n: { language: 'en' }
  }))
}));

const spySearchParamsGet = jest.spyOn(URLSearchParams.prototype, 'get');
const spySearchParamsSet = jest.spyOn(URLSearchParams.prototype, 'set');

const { mockedFilterParams, mockedFilters, mockedQueryName, mockedEvent } = mocks;

const categoriesList = mockedFilters.categories;

describe('use-product-filters tests', () => {
  it('should handleFilterChange work', () => {
    const { result } = renderHook(() => useProductFilters(mockedFilterParams, mockedFilters));

    expect(useLocation).toBeCalled();
    expect(useTranslation).toBeCalled();
    expect(useHistory).toBeCalled();

    const { filterHandler } = result.current.categories;

    act(() => {
      filterHandler(mockedEvent, mockedQueryName, categoriesList);
    });
    expect(spySearchParamsGet).toBeCalled();
    expect(spySearchParamsSet).toBeCalled();
  });
});
