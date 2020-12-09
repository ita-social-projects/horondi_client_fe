import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { handleUserLoad, loginUser } from '../user.sagas';
import { setUser, setUserLoading, setUserError } from '../user.actions';

const userData = {
  email: 'qwerty@gmail.com',
  password: 'qwertY123'
};

describe('Categories saga', () => {
  it.skip('fetches user', () => {
    const fakeUser = {
      data: {
        loginUser: {
          cart: null,
          id: '5ef84084406e9c2d646321b9',
          orders: null,
          purchasedProducts: null,
          __typename: 'User'
        }
      }
    };

    return expectSaga(handleUserLoad, userData)
      .provide([[matchers.call.fn(loginUser), fakeUser]])
      .put(setUserLoading())
      .put(setUser(fakeUser.data.loginUser))
      .run();
  });

  it.skip('handles errors', () =>
    expectSaga(handleUserLoad, userData)
      .provide([[matchers.call.fn(loginUser)]])
      .put(setUserLoading())
      .put(setUserError(true))
      .run());
});
