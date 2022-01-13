import useProductFilters from '../index';

jest.mock('react-router', () => ({
  useLocation: () => ({ search: '' }),
  useHistory: () => ({ push: () => null })
}));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => null, i18n: { language: 'ua' } })
}));
jest.mock('react', () => ({
  useState: () => [{}, () => null],
  useEffect: (cb) => cb()
}));

const args = {
  category: [{ name: [{ value: '' }] }],
  patterns: {},
  models: {}
};

describe('use-product-filters tests', () => {
  it('should return expected result', () => {
    useProductFilters(args, args);
  });
});
