import productModel from '../models/products.model';
import { Product } from '../../interfaces';

const ProductService = {
  async create(product: Product): Promise<Product> {
    const result = await productModel.create(product);
    return result;
  },

  async getAll(): Promise<Product[]> {
    const result = await productModel.getAll();
    return result;
  },
};

export default ProductService;
