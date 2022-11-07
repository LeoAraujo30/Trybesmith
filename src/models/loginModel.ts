import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import Ilogin from '../interfaces/Ilogin';

export default class LoginModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getUser(username: string, password: string): Promise<Ilogin[]> {
    const [result] = await this.connection.execute<Ilogin[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );    
    return result;
  }
}