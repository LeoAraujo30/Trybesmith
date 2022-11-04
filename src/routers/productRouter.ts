import express from 'express';
import ProductController from '../controllers/productController';

const controller = new ProductController();

const router = express.Router();

router.post('/', controller.createProduct);

router.get('/', controller.getAllProducts);

export default router;