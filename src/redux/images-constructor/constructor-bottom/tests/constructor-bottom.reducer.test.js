import { setConstructorBottom } from '../constructor-bottom.actions';
import { mockConstructorModel, mockState } from '../../constructor.variables';
import constructorBottom from '../constructor-bottom.reducer';

describe('reducer tests', () => {
  it('should return default store', () => {
    expect(constructorBottom(mockState)).toEqual(mockState);
  });
  it('should set constructor bottom data to store', () => {
    expect(constructorBottom(mockState, setConstructorBottom(mockConstructorModel))).toEqual(
      mockConstructorModel
    );
  });
});
