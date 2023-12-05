import { UsersRepository } from "../repositoryies/users.repository.js";

export class UsersService {
  usersRepository = new UsersRepository();

  signupUser = async () => {
    const users = await this.usersRepository.signupUser(
      email,
      nickname,
      password,
      confirmPssword
    );
  };
}
