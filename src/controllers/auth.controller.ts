import AuthService from '@services/auth.service';
import TokenService from '@services/token.service';
import LoginRequest from '@lib/request/auth/login.request';
import { Request, Response, NextFunction } from 'express';
import { Service } from "typedi";

@Service()
export default class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) { }

  /**
   * @description 로그인
   */
  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;

      const data = await new LoginRequest(body);
      await data.validate();

      const user = await this.authService.login(data);
      const token = await this.tokenService.createToken(user.id, user.name);

      res.status(200).json({
        status: 200,
        messlge: '로그인 성공',
        token: {
          token,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}