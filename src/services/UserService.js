import axios from 'axios';
import { config } from '../configs';

const { serverUrl } = config.app;

export default class UserService {
  getResource = async (url) => {
    try {
      const catalogs = await axios.get(`${serverUrl}${url}`);
      return catalogs.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  postData = async (url, dataToSend) => {
    try {
      const response = await axios.post(`${serverUrl}${url}`, dataToSend);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  registerUser = (user) => this.postData('users/register', user);

  loginUser = (user) => this.postData('auth/login', user);

  getUserById = async (id, token) => {
    axios({
      method: 'GET',
      url: `${serverUrl}users/${id}`,
      headers: { 'x-auth-token': token }
    });
  };

  sendUserChangedData = async (id, token, data) => {
    axios({
      method: 'PUT',
      url: `${serverUrl}users/${id}`,
      data,
      headers: { 'x-auth-token': token }
    });
  };
}
