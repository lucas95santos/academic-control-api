import express from 'express';
import 'express-async-errors';
import cors from 'cors';
// database
import './database/connection';
// routes
import routes from './routes';
// exception handler
import ExceptionHandler from './exceptions/ExceptionHandler';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.use(ExceptionHandler.execute);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
