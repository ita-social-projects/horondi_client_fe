import useNovaPost from '../use-nova-post';

jest.mock('react', () => ({
  useEffect: (cb) => cb(),
  useState: (value) => [value, () => null],
  useRef: (value) => ({ current: value })
}));
jest.mock('react-redux');
let mockLoading = false;
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: () => ({
    loading: mockLoading,
    error: null,
    refetch: () => null,
    data: {
      getNovaPoshtaCities: ['Львів']
    }
  })
}));

describe('use-nova-post hook tests', () => {
  it('should return expected result ', () => {
    const result = useNovaPost({ city: 'Львів' }, true);
    expect(result[0].cities[0]).toBe('Львів');
  });

  it('should return expected result ', () => {
    mockLoading = true;
    const result = useNovaPost({ city: 'Львів' }, true);
    expect(result[0].cities).toStrictEqual([]);
  });
});
