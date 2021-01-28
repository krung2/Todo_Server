import AuthService from '@services/auth.service';
import LoginRequest from '@lib/request/auth/login.request';
import { Request, Response, NextFunction } from 'express';
import { Service } from "typedi";

@Service()
export default class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) { }

  /**
   * @description 로그인
   */
  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;

      const data = await new LoginRequest(body);
      await data.validate();

      const user = this.authService.login(data);

      res.status(200).json({
        status: 200,
        messlge: '로그인 성공',
      });
    } catch (err) {
      next(err);
    }
  }
}