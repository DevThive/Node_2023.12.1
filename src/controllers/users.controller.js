import { UsersService } from "../services/users.service.js";
export class UsersController {
  usersService = new UsersService();
  Signup = async (req, res, next) => {
    try {
      const { email, nickname, password, confirmPssword } = req.body;

      const users = await this.usersService.singupUser(
        email,
        nickname,
        password,
        confirmPssword
      );

      return res
        .status(200)
        .json({ message: "회원가입이 완료되었습니다.", data: users });
    } catch (err) {
      next(err);
    }
  };
}
