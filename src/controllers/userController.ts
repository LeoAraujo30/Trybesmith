import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  service: UserService;
    
  constructor() {
    this.service = new UserService();
  }
    
  createUser = async (req: Request, res: Response) => {
    const token = await this.service.createUser(req.body);
    res.status(201).json({ token });
  };
}