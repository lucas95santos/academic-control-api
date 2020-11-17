import express from 'express';
import cors from 'cors';
// database
import './database/connection';
// routes
import routes from './routes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
