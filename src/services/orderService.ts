import OrderModel from '../models/orderModel';
import Iorder from '../interfaces/Iorder';
import ProductModel from '../models/productModel';

export default class OrderService {
  model: OrderModel;

  productsModel: ProductModel;
  
  constructor() {
    this.model = new OrderModel();
    this.productsModel = new ProductModel();
  }
  
  async getAllOrders(): Promise<Iorder[]> {
    const orders = await this.model.getAll();
    const products = await this.productsModel.getAll();
    return orders.map((order) => {
      const productsIds = products.filter((product) => product.orderId === order.id)
        .map((product) => product.id);
      return { ...order, productsIds } as Iorder;
    });
  }
}