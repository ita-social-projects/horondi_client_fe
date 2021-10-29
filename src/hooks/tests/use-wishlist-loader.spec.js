import useWishlistLoader from '../use-wishlist-loader';
import { getFromLocalStorage } from '../../services/local-storage.service';

jest.mock('../../services/local-storage.service');
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: () => ({ loading: true, error: null, data: { getWishlistByUserId: {} } })
}));

describe('wishlist loader tests', () => {
  it('should return expected result with loading true', () => {
    getFromLocalStorage.mockImplementation(() => true);

    const result = useWishlistLoader();

    expect(result).toHaveProperty('loading', true);
  });

  it('should return expected result with loading false', () => {
    getFromLocalStorage.mockImplementation(() => false);

    const result = useWishlistLoader();

    expect(result).toHaveProperty('loading', false);
  });
});
