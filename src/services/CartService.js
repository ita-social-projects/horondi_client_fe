import axios from 'axios';
import UserService from './UserService';
import { config } from '../configs';

const serverUrl = config.app;

export default class CartService extends UserService {
  getAllCarts = async () => {
    const carts = await this.getResource('cart');
    return carts;
  };

  getCartById = async (id) => {
    const cart = await this.getResource(`cart/${id}`);
    return cart;
  };

  putToCart = (id, data, token) => {
    axios.put(`${serverUrl}users/cart/${id}`, {
      data,
      'x-auth-token': token
    });
  };
}
