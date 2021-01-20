import 'dotenv/config';

import { PORT } from 'config/index';

import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import APIRouter from '@src/routers';
import path from 'path';
import Container from 'typedi';

const load = async () => {
  console.log(1);
  const app: express.Application = express();
  console.log(2);
  app.use(cors());
  console.log(3);
  app.use(bodyParser.json());
  console.log(4);
  app.use(bodyParser.urlencoded({ extended: true }));
  console.log(5);
  app.use('/static', express.static(path.join(__dirname, '../../public')));
  console.log(6);
  // app.use('/api', Container.get(APIRouter).getRouter());

  const server: http.Server = http.createServer(app);

  console.log(7);
  server.listen(PORT, () => {
    console.log(`Server is Running ${PORT}`);
  });
  console.log(9);
};

export default load;