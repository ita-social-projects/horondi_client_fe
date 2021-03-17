import { setConstructorPattern } from '../constructor-pattern.actions';
import { mockConstructorPattern, mockState } from '../../constructor.variables';
import constructorPattern from '../constructor-pattern.reducer';

describe('reducer tests', () => {
  it('should return default store', () => {
    expect(constructorPattern(mockState)).toEqual(mockState);
  });
  it('should set constructor pattern data to store', () => {
    expect(constructorPattern(mockState, setConstructorPattern(mockConstructorPattern))).toEqual(
      mockConstructorPattern
    );
  });
});
