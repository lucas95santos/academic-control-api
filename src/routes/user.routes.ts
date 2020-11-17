import { Router } from 'express';
// controllers
import UserController from '../controllers/UserController';

const usersRouter = Router();

const userController = new UserController();

// routes
// usersRouter.get('/', );

usersRouter.post('/', userController.store);

// usersRouter.put('/', );

// usersRouter.post('/auth', );

export default usersRouter;
