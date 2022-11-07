import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  service: OrderService;
    
  constructor() {
    this.service = new OrderService();
  }
    
  getAllOrders = async (req: Request, res: Response) => {
    const result = await this.service.getAllOrders();
    res.status(200).json(result);
  };
}