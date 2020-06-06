import ClientService from './ClientService';

class OrderService extends ClientService {
  getAllOrders = async () => {
    const catalogs = await this.getResource('orders');
    return catalogs;
  };

  getOrderById = async (id) => {
    const order = await this.getResource(`orders/${id}`);
    return order;
  };

  postOrder = async (order) => {
    const res = await this.postData('orders', order);
    return res;
  };
}
const orderService = new OrderService();
export default orderService;
