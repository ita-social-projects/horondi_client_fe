import {
  getConstructorFrontPocket,
  setConstructorFrontPocket
} from '../constructor-front-pocket.actions';
import {
  GET_CONSTRUCTOR_FRONT_POCKET,
  SET_CONSTRUCTOR_FRONT_POCKET
} from '../constructor-front-pocket.types';
import { mockId, mockConstructorModel } from '../../constructor.variables';

describe('tests for front pocket actions', () => {
  it('should get constructor front pocket id', () => {
    expect(getConstructorFrontPocket(mockId)).toEqual({
      type: GET_CONSTRUCTOR_FRONT_POCKET,
      payload: mockId
    });
  });
  it('should set constructor front pocket data', () => {
    expect(setConstructorFrontPocket(mockConstructorModel)).toEqual({
      type: SET_CONSTRUCTOR_FRONT_POCKET,
      payload: mockConstructorModel
    });
  });
});
