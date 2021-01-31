import ICustomRouter from "@interface/ICustomRouter";
import AuthController from "@src/controllers/auth.controller";
import { Router } from "express";
import { Service } from "typedi";

@Service()
export default class AuthRouter implements ICustomRouter {
  private router = Router();

  constructor(
    private authController: AuthController,
  ) {
    this.router.post('/login', this.authController.login);
  }

  public getRouter = (): Router => this.router;
}