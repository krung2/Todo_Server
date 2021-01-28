import AuthService from '@services/auth.service';
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
    }
  }
}