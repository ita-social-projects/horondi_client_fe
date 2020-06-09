import ClientService from './ClientService';

class AuthServices extends ClientService {
  oauthGoogle = (token) => {
    const res = this.postData('auth/oauth/google', token);
    return res;
  };

  oauthFacebook = async (token) => {
    const res = await this.postData('auth/oauth/facebook', token);
    return res;
  };

  confirmEmail = async (token) => {
    const res = await this.getResource(`auth/confirmation/${token}`);
    return res;
  };
}
const authService = new AuthServices();
export default authService;
