import { setConstructorBottom } from '../constructor-bottom.actions';
import { mockConstructorModel } from '../../constructor.variables';
import constructorBottom from '../constructor-bottom.reducer';

describe('reducer tests', () => {
  it('should return default store', () => {
    expect(constructorBottom({})).toEqual({});
  });
  it('should set constructor bottom data to store', () => {
    expect(constructorBottom({}, setConstructorBottom(mockConstructorModel))).toEqual(
      mockConstructorModel
    );
  });
});
