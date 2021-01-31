import { Router } from 'express';
import { Service } from 'typedi';
import ICustomRouter from '@interface/ICustomRouter';
import V1 from './v1';

@Service()
export default class APIRouter implements ICustomRouter {
  private router = Router();

  constructor(
    private v1: V1,
  ) {
    this.router.use('/v1', this.v1.getRouter());
  }

  public getRouter = (): Router => this.router;
}