import useProductFilters from '../index';

jest.mock('react-router', () => ({
  useLocation: () => ({ search: '' }),
  useHistory: () => ({ push: () => null })
}));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: () => null })
}));

describe('use-product-filters tests', () => {
  it('should return expected result', () => {
    useProductFilters({ category: {}, patterns: {}, models: {} }, {});
  });
});
