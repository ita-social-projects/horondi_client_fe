import useTranslationsLoad from './use-translations-load';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: () => ({
      then: (cb) => cb({ data: { ua: {}, en: {} } })
    })
  }
}));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: { addResourceBundle: () => null } })
}));

describe('use-translations-load tests', () => {
  it('should cover all branches', () => {
    useTranslationsLoad();
  });
});
