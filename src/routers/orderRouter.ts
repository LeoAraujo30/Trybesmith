import express from 'express';
import OrderController from '../controllers/orderController';

const controller = new OrderController();

const router = express.Router();

router.get('/', controller.getAllOrders);

export default router;