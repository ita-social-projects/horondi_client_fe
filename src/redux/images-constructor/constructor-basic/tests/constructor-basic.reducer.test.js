import { setConstructorBasic } from '../constructor-basic.actions';
import { mockConstructorModel } from '../../constructor.variables';
import constructorBasic from '../constructor-basic.reducer';

describe('reducer tests', () => {
  it('should return default store', () => {
    expect(constructorBasic({})).toEqual({});
  });
  it('should set constructor basic data to store', () => {
    expect(constructorBasic({}, setConstructorBasic(mockConstructorModel))).toEqual(
      mockConstructorModel
    );
  });
});
