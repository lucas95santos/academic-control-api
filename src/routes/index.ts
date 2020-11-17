import { Router } from 'express';
// routes
import usersRouter from './user.routes';

const routes = Router();

routes.use('/users', usersRouter);

export default routes;
