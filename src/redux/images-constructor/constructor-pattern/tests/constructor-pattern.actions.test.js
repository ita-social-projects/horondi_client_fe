import { getConstructorPattern, setConstructorPattern } from '../constructor-pattern.actions';
import { GET_CONSTRUCTOR_PATTERN, SET_CONSTRUCTOR_PATTERN } from '../constructor-pattern.types';
import { mockId, mockConstructorPattern } from '../../constructor.variables';

describe('tests for pattern actions', () => {
  it('should get constructor pattern id', () => {
    expect(getConstructorPattern(mockId)).toEqual({
      type: GET_CONSTRUCTOR_PATTERN,
      payload: mockId
    });
  });
  it('should set constructor pattern data', () => {
    expect(setConstructorPattern(mockConstructorPattern)).toEqual({
      type: SET_CONSTRUCTOR_PATTERN,
      payload: mockConstructorPattern
    });
  });
});
