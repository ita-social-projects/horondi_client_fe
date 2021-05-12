import { createBrowserHistory } from 'history';
import { getFromLocalStorage, setToLocalStorage } from '../services/local-storage.service';
import { USER_TOKENS } from '../configs';
import { regenerateUserTokenPairs } from '../redux/user/user.operations';
import { AUTH_ERRORS } from '../const/error-messages';

export const history = createBrowserHistory();
const { ACCESS_TOKEN, REFRESH_TOKEN } = USER_TOKENS;

const refreshAuthToken = async () => {
  let isRegenerateTokens = false;

  const refreshToken = getFromLocalStorage(REFRESH_TOKEN);

  const newTokenPair = await regenerateUserTokenPairs(refreshToken);

  if (newTokenPair?.message === AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID) {
    return isRegenerateTokens;
  }
  setToLocalStorage(ACCESS_TOKEN, newTokenPair.token);
  setToLocalStorage(REFRESH_TOKEN, newTokenPair.refreshToken);

  isRegenerateTokens = true;

  return isRegenerateTokens;
};

export default refreshAuthToken;
