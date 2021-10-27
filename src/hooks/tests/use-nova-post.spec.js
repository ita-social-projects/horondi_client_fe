import useNovaPost from '../use-nova-post';

jest.mock('react', () => ({
  useEffect: (cb) => cb(),
  useState: (value) => [value, () => null],
  useRef: (value) => ({ current: value })
}));
jest.mock('react-redux');

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: (query, options) => {
    options.onCompleted({ getNovaPostCities: [] });
    return { loading: false, error: null, refetch: () => null };
  }
}));

describe('use-nova-post hook tests', () => {
  it('should return expected result ', () => {
    const result = useNovaPost({ city: 'Львів' }, true);
  });
});
