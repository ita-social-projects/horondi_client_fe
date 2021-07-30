import { setConstructorSize } from '../constructor-size.actions';
import { mockConstructorSize, mockState } from '../../constructor.variables';
import constructorSize from '../constructor-size.reducer';

describe('reducer tests', () => {
  it('should return default store', () => {
    expect(constructorSize(mockState)).toEqual(mockState);
  });
  it('should set constructor size data to store', () => {
    expect(constructorSize(mockState, setConstructorSize(mockConstructorSize))).toEqual(
      mockConstructorSize
    );
  });
});
