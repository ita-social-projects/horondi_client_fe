import { createBrowserHistory } from 'history';
import { getFromLocalStorage, setToLocalStorage } from '../services/local-storage.service';
import { USER_TOKENS, AUTH_ERRORS } from '../configs';
import { regenerateUserTokenPairs } from '../redux/user/user.operations';

export const history = createBrowserHistory();
const { ACCESS_TOKEN, REFRESH_TOKEN } = USER_TOKENS;

const refreshAuthToken = async () => {
  let isRegenerateTokens = false;

  const refreshToken = getFromLocalStorage(REFRESH_TOKEN);
  if (refreshToken) {
    const newTokenPair = await regenerateUserTokenPairs(refreshToken);
    if (newTokenPair?.message !== AUTH_ERRORS.REFRESH_TOKEN_IS_NOT_VALID) {
      setToLocalStorage(ACCESS_TOKEN, newTokenPair.token);
      setToLocalStorage(REFRESH_TOKEN, newTokenPair.refreshToken);
      isRegenerateTokens = true;
    }
  }

  return isRegenerateTokens;
};

export default refreshAuthToken;
