import { GET_CONSTRUCTOR_BASIC, SET_CONSTRUCTOR_BASIC } from '../constructor-basic.types';
import { getConstructorBasic, setConstructorBasic } from '../constructor-basic.actions';
import { mockId, mockConstructorModel } from '../../constructor.variables';

describe('action tests', () => {
  it('should get constructor basic id', () => {
    expect(getConstructorBasic(mockId)).toEqual({
      type: GET_CONSTRUCTOR_BASIC,
      payload: mockId
    });
  });
  it('should set constructor basic data', () => {
    expect(setConstructorBasic(mockConstructorModel)).toEqual({
      type: SET_CONSTRUCTOR_BASIC,
      payload: mockConstructorModel
    });
  });
});
