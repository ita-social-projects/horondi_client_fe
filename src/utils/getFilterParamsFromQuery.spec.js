import getFilterParamsFromQuery from './getFilterParamsFromQuery';

const searchParams = {
  get: () => '1,2'
};

describe('getFilterParamsFromQuery test', () => {
  it('should return expected result', () => {
    const result = getFilterParamsFromQuery(searchParams);

    expect(result).toHaveProperty('category');
  });
});
