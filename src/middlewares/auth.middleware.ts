import errors from '@lib/errors';
import CustomError from '@lib/errors/CustomError';
import TokenService from '@services/token.service';
import AuthRepository from '@repositories/auth.repository';
import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';
import User from '@models/user';
import errorMiddleware from './error.middleware';

@Service()
export default class AuthMiddleware {

  constructor(
    private readonly tokenService: TokenService,
    private readonly authRepository: AuthRepository,
  ) { }

  /**
   * @description 토큰 유무 체크
   */
  private validateToken = async (token: string | string[] | undefined): Promise<User> => {
    if (token === undefined) {
      throw new CustomError(errors.NotExistToken);
    }

    if (Array.isArray(token)) {
      throw new CustomError(errors.WrongRequest);
    }

    const decoded = Object(await this.tokenService.verifyToken(token));
    const user: User | undefined = await this.authRepository.getUserById(decoded.id);

    if (user === undefined) {
      throw new CustomError(errors.InappropriateId);
    }

    return user;
  }

  /**
   * @description admin 로그인
   */
  public adminLoginCheck = async (req: any, res: Response, next: NextFunction) => {
    const token: string | string[] | undefined = req.headers['x-access-token'];

    try {
      const user: User = await this.validateToken(token);

      if (user.isAdmin === false) {
        throw new CustomError(errors.Forbidden);
      }

      req.user = user;
      next();

    } catch (err) {
      const error: CustomError | Error = this.tokenService.searchTokenError(err);
      errorMiddleware(error, req, res, next);
    }
  }

}
