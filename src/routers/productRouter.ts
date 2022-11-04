import express from 'express';
import ProductController from '../controllers/productController';

const controllers = new ProductController();

const router = express.Router();

router.post('/', controllers.createProduct);

router.get('/', controllers.getAllProducts);

export default router;