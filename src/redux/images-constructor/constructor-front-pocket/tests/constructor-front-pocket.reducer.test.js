import { setConstructorFrontPocket } from '../constructor-front-pocket.actions';
import { mockConstructorModel } from '../../constructor.variables';
import constructorFrontPocket from '../constructor-front-pocket.reducer';

describe('reducer tests', () => {
  it('should return default store', () => {
    expect(constructorFrontPocket({})).toEqual({});
  });
  it('should set constructor front pocket data to store', () => {
    expect(constructorFrontPocket({}, setConstructorFrontPocket(mockConstructorModel))).toEqual(
      mockConstructorModel
    );
  });
});
