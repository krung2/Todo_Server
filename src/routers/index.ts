import { Router } from 'express';
import { Service } from 'typedi';
import ICustomRouter from '@interface/ICustomRouter';

@Service()
export default class APIRouter implements ICustomRouter {
  private router = Router();

  constructor() { }

  public getRouter = (): Router => this.router;
}