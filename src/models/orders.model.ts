import connection from './connection';
import { Order } from '../../interfaces';

const OrderModel = {
  async getAll(): Promise<Order[]> {
    const query = `
      SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.Orders AS orders
      INNER JOIN Trybesmith.Products AS products
      ON orders.id = products.orderId
      GROUP BY orders.id
      ORDER BY orders.userId`;
    const [allOrders] = await connection.execute(query);
    return allOrders as Order[];
  },
};

export default OrderModel;
