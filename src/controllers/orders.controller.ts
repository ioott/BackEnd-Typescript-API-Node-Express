import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import orderService from '../services/orders.service';

const OrderController = {
  async getAll(req: Request, res: Response) {
    const allOrders = await orderService.getAll();
    res.status(StatusCodes.OK).json(allOrders);
  },
};

export default OrderController;
