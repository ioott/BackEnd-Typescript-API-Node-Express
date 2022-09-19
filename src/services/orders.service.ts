import orderModel from '../models/orders.model';
import { Order } from '../../interfaces';

const OrderService = {
  async getAll(): Promise<Order[]> {
    const allOrders = await orderModel.getAll();
    return allOrders;
  },

};

export default OrderService;
