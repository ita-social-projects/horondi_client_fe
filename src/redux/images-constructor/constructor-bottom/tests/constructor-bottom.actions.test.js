import { getConstructorBottom, setConstructorBottom } from '../constructor-bottom.actions';
import { GET_CONSTRUCTOR_BOTTOM, SET_CONSTRUCTOR_BOTTOM } from '../constructor-bottom.types';
import { mockId, mockConstructorModel } from '../../constructor.variables';

describe('tests for bottom actions', () => {
  it('should get constructor bottom id', () => {
    expect(getConstructorBottom(mockId)).toEqual({
      type: GET_CONSTRUCTOR_BOTTOM,
      payload: mockId
    });
  });
  it('should set constructor bottom data', () => {
    expect(setConstructorBottom(mockConstructorModel)).toEqual({
      type: SET_CONSTRUCTOR_BOTTOM,
      payload: mockConstructorModel
    });
  });
});
