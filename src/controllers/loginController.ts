import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  service: LoginService;
    
  constructor() {
    this.service = new LoginService();
  }
    
  getToken = async (req: Request, res: Response) => {
    const token = await this.service.getToken(req.body);
    res.status(200).json({ token });
  };
}