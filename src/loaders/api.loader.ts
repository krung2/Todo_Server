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
  const app: express.Application = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/static', express.static(path.join(__dirname, '../../public')));
  app.use('/api', Container.get(APIRouter).getRouter());

  const server: http.Server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Server is Running ${PORT}`);
  });
};

export default load;