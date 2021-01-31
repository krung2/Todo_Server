import jwt from 'jsonwebtoken';
import { JWT } from '@config/index';
import { SignOptions } from "jsonwebtoken";
import { Service } from "typedi";

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
}
