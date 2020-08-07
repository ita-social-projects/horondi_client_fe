import {
  setSortByPrice,
  setSortByRate,
  setSortByPopularity,
  setPagesCount,
  setCurrentPage
} from '../filter.actions';
import {
  SET_SORT_BY_PRICE,
  SET_SORT_BY_RATE,
  SET_SORT_BY_POPULARITY,
  SET_PAGES_COUNT,
  SET_CURRENT_PAGE
} from '../filter.types';

describe('test action', () => {
  test('#1 should return current page default payload', () => {
    expect(setCurrentPage()).toEqual({
      type: SET_CURRENT_PAGE,
      payload: 1
    });
  });

  test('#2 should return current page payload = 5', () => {
    expect(setCurrentPage(5)).toEqual({
      type: SET_CURRENT_PAGE,
      payload: 5
    });
  });

  test('#3 should return sort by price default payload', () => {
    expect(setSortByPrice()).toEqual({
      type: SET_SORT_BY_PRICE,
      payload: 0
    });
  });

  test('#4 should return sort by price payload = -1', () => {
    expect(setSortByPrice(-1)).toEqual({
      type: SET_SORT_BY_PRICE,
      payload: -1
    });
  });

  test('#5 should return sort by rate default payload', () => {
    expect(setSortByRate()).toEqual({
      type: SET_SORT_BY_RATE,
      payload: 0
    });
  });

  test('#6 should return sort by rate payload = -1', () => {
    expect(setSortByRate(-1)).toEqual({
      type: SET_SORT_BY_RATE,
      payload: -1
    });
  });

  test('#7 should return sort by popularity default payload', () => {
    expect(setSortByPopularity()).toEqual({
      type: SET_SORT_BY_POPULARITY,
      payload: 0
    });
  });

  test('#8 should return sort by popularity payload = 1', () => {
    expect(setSortByPopularity(1)).toEqual({
      type: SET_SORT_BY_POPULARITY,
      payload: 1
    });
  });
  test('#9 should return pages count and object', () => {
    expect(setPagesCount()).toEqual({
      type: SET_PAGES_COUNT,
      payload: 1
    });
  });

  test('#10 should return sort by popularity payload = 1', () => {
    expect(setSortByPopularity(1)).toEqual({
      type: SET_SORT_BY_POPULARITY,
      payload: 1
    });
  });
});
