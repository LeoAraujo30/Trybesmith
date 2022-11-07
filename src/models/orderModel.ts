import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import Iorder from '../interfaces/Iorder';

export default class OrderModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getAll(): Promise<Iorder[]> {
    const [result] = await this.connection.execute<Iorder[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Orders',
    );
    return result;
  }
}