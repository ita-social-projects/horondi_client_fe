import useTranslationsLoad from './use-translations-load';

let mockCalls = 0;

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: () => ({
      then: (cb) => {
        cb({ data: { ua: {}, en: {} } });
        mockCalls = 1;
      }
    })
  }
}));
jest.mock('react', () => ({
  useMemo: (cb) => cb()
}));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: { addResourceBundle: () => null } })
}));

describe('use-translations-load tests', () => {
  it('should call axios methods', () => {
    useTranslationsLoad();

    expect(mockCalls).toBe(1);
  });
});
