import useDeleteProductFromWishlistHandler from '../use-delete-product-from-wishlist-handler';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';

jest.mock('../../services/local-storage.service');
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [{ products: [{ _id: 1 }] }, () => null]
}));
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useMutation: () => [
    () => null,
    { loading: true, error: null, data: { deleteProductFromWishlist: { products: [] } } }
  ]
}));

setToLocalStorage.mockImplementation(() => null);

describe('use-delete-product-from-wishlist-handler tests', () => {
  it('should return expected result with loading true', () => {
    getFromLocalStorage.mockImplementation(() => true);

    const result = useDeleteProductFromWishlistHandler();

    result[1]({ _id: 1 });

    expect(result[0]).toHaveProperty('loading', true);
  });

  it('should return expected result with loading false', () => {
    getFromLocalStorage.mockImplementation(() => false);

    const result = useDeleteProductFromWishlistHandler();

    result[1]({ _id: 1 });

    expect(result[0]).toHaveProperty('loading', false);
  });
});
