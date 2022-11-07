import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import LoginService from '../services/loginService';

const username = Joi.string().required();
const password = Joi.string().required();

export default class LoginMiddleware {
  service: LoginService;
    
  constructor() {
    this.service = new LoginService();
  }
    
  validateLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { error: err1 } = username.validate(req.body.username);
    const { error: err2 } = password.validate(req.body.password);
    if (err1) {
      return res.status(400).json({ message: '"username" is required' });
    }
    if (err2) {
      return res.status(400).json({ message: '"password" is required' });
    }
    const user = await this.service.getUser(req.body);
    if (!user) {
      res.status(401).json({ message: 'Username or password invalid' });
    } else {
      next();
    }
  };
}