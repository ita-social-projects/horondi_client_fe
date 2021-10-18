import { checkFirstCondition, checkSecondCondition } from '../condition-checkers';

const mockData = {
  target: { checked: true, name: 'name' },
  query: 'query',
  categoryId: 'categoryId'
};

describe('condition-checkers tests', () => {
  it('should return expected result', () => {
    const result1 = checkFirstCondition(mockData.query, mockData.target, mockData.categoryId);
    const result2 = checkSecondCondition(mockData.query, mockData.target);

    expect(result1).toBe('query,categoryId');
    expect(result2).toBe('query,name');
  });

  it('should cover other branches', () => {
    mockData.target.checked = null;

    checkFirstCondition(mockData.query, mockData.target, mockData.categoryId);
    checkSecondCondition(mockData.query, mockData.target);
  });
});
