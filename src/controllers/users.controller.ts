import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from '../services/users.service';

const UserController = {
  async create(req: Request, res: Response) {
    const user = req.body;
    const token = await userService.create(user);
    res.status(StatusCodes.CREATED).json(token);
  },

  // async getAll(req: Request, res: Response) {
  //   const allProducts = await productService.getAll();
  //   res.status(StatusCodes.OK).json(allProducts);
  // },
};

export default UserController;
