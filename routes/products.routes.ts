import { Router } from 'express';
import productController from '../src/controllers/products.controller';
import userController from '../src/controllers/users.controller';

const router = Router();

router.post('/products', productController.create);
router.get('/products', productController.getAll);
router.post('/users', userController.create);

export default router;
