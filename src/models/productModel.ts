import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Iproduct from '../interfaces';
import connection from './connection';

export default class ProductModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(name: string, amount: string): Promise<Iproduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, name, amount };
  }

  async getAll(): Promise<Iproduct[]> {
    const [result] = await this.connection.execute<Iproduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return result;
  }
}