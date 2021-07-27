import { getConstructorSize, setConstructorSize } from '../constructor-size.actions';
import { GET_CONSTRUCTOR_SIZE, SET_CONSTRUCTOR_SIZE } from '../constructor-size.types';
import { mockId, mockConstructorSize } from '../../constructor.variables';

describe('tests for pattern actions', () => {
  it('should get constructor size id', () => {
    expect(getConstructorSize(mockId)).toEqual({
      type: GET_CONSTRUCTOR_SIZE,
      payload: mockId
    });
  });
  it('should set constructor size data', () => {
    expect(setConstructorSize(mockConstructorSize)).toEqual({
      type: SET_CONSTRUCTOR_SIZE,
      payload: mockConstructorSize
    });
  });
});
