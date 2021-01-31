import { Router } from 'express';
import { Service } from 'typedi';
import ICustomRouter from '@interface/ICustomRouter';
import AuthRouter from './auth';

@Service()
export default class V1Router implements ICustomRouter {
  private router = Router();

  constructor(
    private authRouter: AuthRouter,
  ) {
    this.router.use('/auth', this.authRouter.getRouter());
  }

  public getRouter = (): Router => this.router;
}