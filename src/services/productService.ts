import Iproduct from '../interfaces';
import ProductModel from '../models/productModel';

export default class ProductService {
  model: ProductModel;
  
  constructor() {
    this.model = new ProductModel();
  }
  
  async createProduct(obj: Iproduct): Promise<Iproduct> {
    const { name, amount } = obj;
    const result = await this.model.create(name, amount);
    return result;
  }

  async getAllProducts(): Promise<Iproduct[]> {
    const result = await this.model.getAll();
    return result;
  }
}