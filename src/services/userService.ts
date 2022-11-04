import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
import Iuser from '../interfaces/Iuser';
import UserModel from '../models/userModel';

// dotenv.config();

export default class UserService {
  model: UserModel;
  
  constructor() {
    this.model = new UserModel();
  }
  
  async createUser(obj: Iuser): Promise<string> {
    const { username, classe, level, password } = obj;
    const id = await this.model.create(username, classe, level, password);
    const token = jwt.sign({ id, username, classe, level, password }, 'secret');
    return token;
  }
}