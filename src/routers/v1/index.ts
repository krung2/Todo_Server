import ICustomRouter from '@interface/ICustomRouter';
import { Router } from 'express';
import { Service } from 'typedi';

@Service()
export default class V1Router implements ICustomRouter {
  private router = Router();

  // constructor() { }

  public getRouter = (): Router => this.router;
}