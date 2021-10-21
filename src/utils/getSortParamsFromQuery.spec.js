import { SORT_ASC, SORT_DESC, RATE, POPULARITY } from '../configs/index';
import getSortParamsFromQuery from './getSortParamsFromQuery';

const queries = [SORT_ASC, SORT_DESC, RATE, POPULARITY];
let result;

describe('getFilterParamsFromQuery test', () => {
  it('should return expected result', () => {
    result = getSortParamsFromQuery(queries[0]);

    expect(result).toHaveProperty('basePrice');
  });

  it('should return expected result', () => {
    result = getSortParamsFromQuery(queries[1]);

    expect(result).toHaveProperty('basePrice');
  });

  it('should return expected result', () => {
    result = getSortParamsFromQuery(queries[2]);

    expect(result).toHaveProperty('rate');
  });

  it('should return expected result', () => {
    result = getSortParamsFromQuery(queries[3]);

    expect(result).toHaveProperty('purchasedCount');
  });

  it('should return expected result', () => {
    result = getSortParamsFromQuery('1');

    expect(result).toEqual({});
  });
});
