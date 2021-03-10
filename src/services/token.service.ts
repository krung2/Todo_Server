import jwt from 'jsonwebtoken';
import { JWT } from '@config/index';
import { SignOptions } from "jsonwebtoken";
import { Service } from "typedi";
import CustomError from '@lib/errors/CustomError';

@Service()
export default class TokenService {

  /**
   * @description 토큰생성
   */
  public createToken = async (id: string, name: string): Promise<string> => {
    const payload = {
      id,
      name,
    };

    const options: SignOptions = {
      expiresIn: JWT.EXPIRES_IN,
    };

    return jwt.sign(payload, JWT.SECRET, options);
  }

  /**
   * @description 토큰 인증
   */
  public verifyToken = async (token: string): Promise<object | string> => {
    return jwt.verify(token, JWT.SECRET);
  }

  /**
   * @description 토큰 에러 검사
   */
  public searchTokenError = (err: Error): CustomError | Error => {
    let code = null;
    let message = null;

    if (err instanceof CustomError) {
      return err;
    }

    switch (err.message) {
      case 'jwt must be provided':
      case 'jwt malformed':
      case 'invalid token':
      case 'invalid signature':
        code = 401;
        message = '위조된 토큰';
        break;
      case 'jwt expired':
        code = 410;
        message = '만료된 토큰';
        break;
      default:
        return err;
    }

    return new CustomError({ code, message });
  }
}
