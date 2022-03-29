import { orderReducer } from '../order.reducer';
import { setOrder, setIsOrderCreated, setOrderLoading } from '../order.actions';
import { orderExample } from './order.variables';

describe('Orders reducer test', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      loading: false,
      order: null,
      isOrderCreated: false
    };
  });

  it('should return default state', () => {
    expect(orderReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with order', () => {
    const state = {
      ...initialState,
      order: orderExample
    };

    expect(orderReducer(state, setOrder(orderExample))).toEqual(state);
  });

  it('should return state with status order created', () => {
    const state = {
      ...initialState,
      isOrderCreated: true
    };

    expect(orderReducer(initialState, setIsOrderCreated(true))).toEqual(state);
  });

  it('should set loading to false', () => {
    const state = {
      ...initialState,
      loading: false
    };

    expect(orderReducer(initialState, setOrderLoading(false))).toEqual(state);
  });

  it('should set loading to true', () => {
    const state = {
      ...initialState,
      loading: true
    };

    expect(orderReducer(initialState, setOrderLoading(true))).toEqual(state);
  });
});
