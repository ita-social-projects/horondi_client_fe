import { setConstructorFrontPocket } from '../constructor-front-pocket.actions';
import { mockConstructorModel, mockState } from '../../constructor.variables';
import constructorFrontPocket from '../constructor-front-pocket.reducer';

describe('reducer tests', () => {
  it('should return default store', () => {
    expect(constructorFrontPocket(mockState)).toEqual(mockState);
  });
  it('should set constructor front pocket data to store', () => {
    expect(
      constructorFrontPocket(mockState, setConstructorFrontPocket(mockConstructorModel))
    ).toEqual(mockConstructorModel);
  });
});
