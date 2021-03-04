import { setConstructorPattern } from '../constructor-pattern.actions';
import { mockConstructorPattern } from '../../constructor.variables';
import constructorPattern from '../constructor-pattern.reducer';

describe('reducer tests', () => {
  it('should return default store', () => {
    expect(constructorPattern({})).toEqual({});
  });
  it('should set constructor pattern data to store', () => {
    expect(constructorPattern({}, setConstructorPattern(mockConstructorPattern))).toEqual(
      mockConstructorPattern
    );
  });
});
