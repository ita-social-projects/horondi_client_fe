import {
  setAllFilterData,
  setAllProducts,
  setCategoryFilter,
  setColorsFilter,
  setPatternsFilter,
  setPriceFilter,
  setProductsLoading,
  setSearchFilter,
  setHotItemFilter,
  getFiltredProducts,
  setSortByPrice,
  setSortByRate,
  setSortByPopularity,
  setPagesCount,
  setCurrentPage,
  setProduct,
  getProduct,
  setProductLoading,
  setRate,
  setComment,
  addComment,
  deleteComment,
  updateComment,
  setCommentsLoading
} from '../products.actions';
import {
  SET_ALL_FILTER_DATA,
  SET_ALL_PRODUCTS,
  GET_FILTRED_PRODUCTS,
  SET_PRODUCTS_LOADING,
  SET_CATEGORY_FILTER,
  SET_PRICE_FILTER,
  SET_COLORS_FILTER,
  SET_PATTERNS_FILTER,
  SET_SEARCH,
  SET_HOT_ITEM_FILTER,
  SET_SORT_BY_PRICE,
  SET_SORT_BY_RATE,
  SET_SORT_BY_POPULARITY,
  SET_PAGES_COUNT,
  SET_CURRENT_PAGE,
  SET_PRODUCT,
  GET_PRODUCT,
  SET_PRODUCT_LOADING,
  SET_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT,
  SET_COMMENTS_LOADING,
  SET_RATE,
  DELETE_COMMENT
} from '../products.types';
import { productsExample } from './products.mocks';

describe('Filter actions test', () => {
  it('should set all products to payload property', () => {
    const result = {
      type: SET_ALL_PRODUCTS,
      payload: productsExample
    };

    expect(setAllProducts(productsExample)).toEqual(result);
  });

  it('should set all filter data to payload property', () => {
    const result = {
      type: SET_ALL_FILTER_DATA,
      payload: productsExample
    };

    expect(setAllFilterData(productsExample)).toEqual(result);
  });

  it('should set hot items filter to payload property', () => {
    const isHot = true;
    const result = {
      type: SET_HOT_ITEM_FILTER,
      payload: isHot
    };

    expect(setHotItemFilter(isHot)).toEqual(result);
  });

  it('should set category filter to payload property', () => {
    const categoryFilter = [
      '54c1cfb719f3bb97c28d762e',
      'ddc81f5dbac48c38d0403dd3'
    ];
    const result = {
      type: SET_CATEGORY_FILTER,
      payload: categoryFilter
    };

    expect(setCategoryFilter(categoryFilter)).toEqual(result);
  });

  it('should set colors filter to payload property', () => {
    const colorsFilter = ['red', 'green'];
    const result = {
      type: SET_COLORS_FILTER,
      payload: colorsFilter
    };

    expect(setColorsFilter(colorsFilter)).toEqual(result);
  });

  it('should set patterns filter to payload property', () => {
    const patternsFilter = ['black', 'human'];
    const result = {
      type: SET_PATTERNS_FILTER,
      payload: patternsFilter
    };

    expect(setPatternsFilter(patternsFilter)).toEqual(result);
  });

  it('should set search to payload property', () => {
    const search = 'Rol';
    const result = {
      type: SET_SEARCH,
      payload: search
    };

    expect(setSearchFilter(search)).toEqual(result);
  });

  it('should set price to payload property', () => {
    const price = [200, 400];
    const result = {
      type: SET_PRICE_FILTER,
      payload: price
    };

    expect(setPriceFilter(price)).toEqual(result);
  });

  it('should return all products', () => {
    const result = {
      type: GET_FILTRED_PRODUCTS
    };

    expect(getFiltredProducts()).toEqual(result);
  });
});

describe('loading action', () => {
  test('should return loading = true', () => {
    expect(setProductsLoading(true)).toEqual({
      type: SET_PRODUCTS_LOADING,
      payload: true
    });
  });
  test('should return loading = false', () => {
    expect(setProductsLoading(false)).toEqual({
      type: SET_PRODUCTS_LOADING,
      payload: false
    });
  });

  test('should return current page payload = 5', () => {
    expect(setCurrentPage(5)).toEqual({
      type: SET_CURRENT_PAGE,
      payload: 5
    });
  });

  test('should return sort by price payload = -1', () => {
    expect(setSortByPrice(-1)).toEqual({
      type: SET_SORT_BY_PRICE,
      payload: -1
    });
  });

  test('should return sort by rate payload = -1', () => {
    expect(setSortByRate(-1)).toEqual({
      type: SET_SORT_BY_RATE,
      payload: -1
    });
  });

  test('should return sort by popularity payload = 1', () => {
    expect(setSortByPopularity(1)).toEqual({
      type: SET_SORT_BY_POPULARITY,
      payload: 1
    });
  });

  test('should set pages count', () => {
    expect(setPagesCount(10)).toEqual({
      type: SET_PAGES_COUNT,
      payload: 10
    });
  });
});

describe('Product actions test', () => {
  test('should set new product to payload property', () => {
    const newProduct = {
      data: {
        getProductsById: {
          name: {
            lang: 'en',
            value: 'Rolltop Pink'
          },
          basePrice: 1450
        }
      }
    };
    const result = {
      type: SET_PRODUCT,
      payload: newProduct
    };

    expect(setProduct(newProduct)).toEqual(result);
  });

  test('should return object with type GET_PRODUCT and product id', () => {
    const productId = 'c3a84a5b9866c30390366168';
    const result = {
      type: GET_PRODUCT,
      payload: productId
    };

    expect(getProduct(productId)).toEqual(result);
  });

  test('should return loading = true', () => {
    expect(setProductLoading(true)).toEqual({
      type: SET_PRODUCT_LOADING,
      payload: true
    });
  });

  test('should return loading = false', () => {
    expect(setProductLoading(false)).toEqual({
      type: SET_PRODUCT_LOADING,
      payload: false
    });
  });

  test('should set rate to payload', () => {
    const newRate = {
      data: {
        addRate: {
          rate: 5
        }
      }
    };
    const result = {
      type: SET_RATE,
      payload: newRate
    };

    expect(setRate(newRate)).toEqual(result);
  });

  test('should set comment to payload', () => {
    const newComment = {
      data: {
        addComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: SET_COMMENT,
      payload: newComment
    };

    expect(setComment(newComment)).toEqual(result);
  });

  test('should set comment to add to payload', () => {
    const commentToAdd = {
      data: {
        addComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: ADD_COMMENT,
      payload: commentToAdd
    };

    expect(addComment(commentToAdd)).toEqual(result);
  });

  test('should set comment to delete to payload', () => {
    const commentToDelete = {
      data: {
        deleteComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: DELETE_COMMENT,
      payload: commentToDelete
    };

    expect(deleteComment(commentToDelete)).toEqual(result);
  });

  test('should set comment to delete to payload', () => {
    const commentToUpdate = {
      data: {
        updateComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: UPDATE_COMMENT,
      payload: commentToUpdate
    };

    expect(updateComment(commentToUpdate)).toEqual(result);
  });

  test('should set comments loading', () => {
    const result = {
      type: SET_COMMENTS_LOADING,
      payload: true
    };

    expect(setCommentsLoading(true)).toEqual(result);
  });

  test('should set updating comment', () => {
    const commentId = '859238jfj3n4fybu5';

    const result = {
      type: SET_COMMENTS_LOADING,
      payload: commentId
    };

    expect(setCommentsLoading(commentId)).toEqual(result);
  });
});
