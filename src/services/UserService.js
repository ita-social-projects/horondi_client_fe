import ClientService from './ClientService';
import { config } from '../configs';

const { serverUrl } = config.app;

export default class UserService extends ClientService {
  registerUser = (user) => this.postData('users/register', user);

  loginUser = (user) => this.postData('auth/login', user);

  getUserById = async (id) => this.getResource(`${serverUrl}users/${id}`);

  sendUserChangedData = async (id, data) => {
    this.putData(`${serverUrl}users/${id}`, data);
  };
}
