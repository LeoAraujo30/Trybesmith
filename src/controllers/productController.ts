import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  service: ProductService;
    
  constructor() {
    this.service = new ProductService();
  }
    
  createProduct = async (req: Request, res: Response) => {
    const result = await this.service.createProduct(req.body);
    res.status(201).json(result);
  };

  getAllProducts = async (req: Request, res: Response) => {
    const result = await this.service.getAllProducts();
    res.status(200).json(result);
  };
}