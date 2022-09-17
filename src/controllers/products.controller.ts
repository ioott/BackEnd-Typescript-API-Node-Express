import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import productService from '../services/products.service';

const ProductController = {
  async create(req: Request, res: Response) {
    const product = req.body;
    const productCreated = await productService.create(product);
    res.status(StatusCodes.CREATED).json(productCreated);
  },

  async getAll(req: Request, res: Response) {
    const allProducts = await productService.getAll();
    res.status(StatusCodes.OK).json(allProducts);
  },
};

export default ProductController;
