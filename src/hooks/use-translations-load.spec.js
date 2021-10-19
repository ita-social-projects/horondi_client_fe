import useTranslationsLoad from './use-translations-load';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: () => ({
      then: (cb) =>
        cb({
          data: [
            {
              _id: 'some id',
              ua: { name: 'Імя' },
              en: { name: 'some name' }
            }
          ]
        })
    })
  }
}));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: { addResource: () => null } })
}));

describe('use-translations-load tests', () => {
  it('should cover all branches', () => {
    useTranslationsLoad();
  });
});
