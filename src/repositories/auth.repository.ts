import RegisterRequest from "@lib/request/auth/register.request";
import User from "@models/user";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {

  public getUserById = async (id: string): Promise<User | undefined> => {
    return this.createQueryBuilder()
      .where('id = :id', { id })
      .getOne();
  }

  public addUser = async (user: RegisterRequest): Promise<User> => {
    return this.save(user);
  }
}