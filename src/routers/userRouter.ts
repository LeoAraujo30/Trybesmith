import express from 'express';
import UserController from '../controllers/userController';

const controller = new UserController();

const router = express.Router();

router.post('/', controller.createUser);

export default router;