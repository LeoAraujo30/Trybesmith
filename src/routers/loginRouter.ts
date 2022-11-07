import express from 'express';
import LoginController from '../controllers/loginController';
import LoginMiddleware from '../middlewares/loginMiddleware';

const controller = new LoginController();
const middleware = new LoginMiddleware();

const router = express.Router();

router.post('/', middleware.validateLogin, controller.getToken);

export default router;