import axios from 'axios';
import ClientService from './ClientService';
import { config } from '../configs';

const { serverUrl } = config.app;

class CartService extends ClientService {
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

const cartService = new CartService();
export default cartService;
