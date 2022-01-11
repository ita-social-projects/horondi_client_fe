import useAddProductToWishlistHandler from '../use-add-product-to-wishlist-handler';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage.service';
import useWishlistLoader from '../use-wishlist-loader';

jest.mock('../../services/local-storage.service');
jest.mock('../use-wishlist-loader');
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [true, () => null],
  useEffect: (cb) => cb(),
  useRef: () => ({ current: false })
}));
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useMutation: () => [
    () => null,
    {
      loading: true,
      error: null,
      data: { addProductToWishlist: { products: [{ _id: 1 }] } }
    }
  ]
}));

setToLocalStorage.mockImplementation(() => null);
useWishlistLoader.mockImplementation(() => ({ wishlist: { products: [{}] } }));

describe('use-delete-product-from-wishlist-handler tests', () => {
  it('should return expected result while adding product to wishlist', () => {
    getFromLocalStorage.mockImplementation(() => true);

    const result = useAddProductToWishlistHandler({ _id: 1 });

    result[1]();

    expect(result[0]).toBeTruthy();
  });

  it('should return expected result while adding product to user wishlist', () => {
    getFromLocalStorage.mockImplementation(() => false);

    const result = useAddProductToWishlistHandler({ _id: 1 });

    result[1]();

    expect(result[0]).toBeTruthy();
  });

  it('should find same product in wishlist', () => {
    getFromLocalStorage.mockImplementation(() => false);

    useWishlistLoader.mockImplementation(() => ({ wishlist: { products: [{ _id: 1 }] } }));

    const result = useAddProductToWishlistHandler({ _id: 1 });

    result[1]();

    expect(result[0]).toBeTruthy();
  });
});
