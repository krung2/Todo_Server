import User from '@models/user';
import AuthRepository from '@repositories/auth.repository';
import CustomError from '@lib/errors/CustomError';
import errors from '@lib/errors';
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";

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
  public login = async (id: string, pw: string): Promise<User> => {
    const user: User | undefined = await this.authRepository.getUserById(id);

    if (user === undefined) {
      throw new CustomError(errors.InappropriateId);
    }

    if (user.pw === pw) {
      throw new CustomError(errors.InappropriatePw);
    }

    return user;
  }
}