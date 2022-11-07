import jwt from 'jsonwebtoken';
import Ilogin from '../interfaces/Ilogin';
import LoginModel from '../models/loginModel';

export default class LoginService {
  model: LoginModel;
  
  constructor() {
    this.model = new LoginModel();
  }

  async getUser(obj: Ilogin): Promise<Ilogin> {
    const { username, password } = obj;
    const [user] = await this.model.getUser(username, password);
    return user;
  }
  
  async getToken(obj: Ilogin): Promise<string> {
    const user = await this.getUser(obj);
    const token = jwt.sign({ id: user.id, username: user.username }, 'secret');
    return token;
  }
}