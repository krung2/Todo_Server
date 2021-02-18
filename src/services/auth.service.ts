import User from '@models/user';
import AuthRepository from '@repositories/auth.repository';
import CustomError from '@lib/errors/CustomError';
import errors from '@lib/errors';
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import LoginRequest from '@lib/request/auth/login.request';
import RegisterRequest from '@lib/request/auth/register.request';

@Service()
export default class AuthService {

  constructor(
    @InjectRepository()
    private readonly authRepository: AuthRepository,
  ) { }

  /**
   * @description 로그인
   * @param id
   * @param pw
   */
  public login = async (data: LoginRequest): Promise<User> => {
    const user: User | undefined = await this.authRepository.getUserById(data.id);

    if (user === undefined) {
      throw new CustomError(errors.InappropriateId);
    }

    if (user.pw === data.pw) {
      throw new CustomError(errors.InappropriatePw);
    }

    return user;
  }

  /**
   * @description 회원가입
   */
  public register = async (data: RegisterRequest): Promise<User> => {
    return await this.authRepository.addUser(data);
  }
}