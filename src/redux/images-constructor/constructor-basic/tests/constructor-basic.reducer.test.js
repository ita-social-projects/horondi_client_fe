import { setConstructorBasic } from '../constructor-basic.actions';
import { mockConstructorModel, mockState } from '../../constructor.variables';
import constructorBasic from '../constructor-basic.reducer';

describe('reducer tests', () => {
  it('should return default store', () => {
    expect(constructorBasic(mockState)).toEqual(mockState);
  });
  it('should set constructor basic data to store', () => {
    expect(constructorBasic(mockState, setConstructorBasic(mockConstructorModel))).toEqual(
      mockConstructorModel
    );
  });
});
