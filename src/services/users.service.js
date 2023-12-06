import { UsersRepository } from "../repositoryies/users.repository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UsersService {
  usersRepository = new UsersRepository();

  signupUser = async (res, email, nickname, password, confirmpassword) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // email과 nickname Unique로 설정하여서 중복 회원가입 방지

    //이메일 형식
    let regEmail =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    //비밀번호 형식
    let pwRef = /^[a-zA-z0-9]{6,12}$/;

    const existsEmail = await this.usersRepository.existsEmail(email);

    const existsNickname = await this.usersRepository.existsNickname(nickname);

    //   // 이메일 닉네임 존재하는지 확인
    if (existsEmail) {
      return res
        .status(400)
        .json({ errorMessage: "Email 중복을 확인해주세요." });
    }

    // 닉네임 중복 확인
    if (existsNickname) {
      return res
        .status(400)
        .json({ errorMessage: "Nickname 중복을 확인해주세요." });
    }

    //이메일 형식 확인
    if (!regEmail.test(email)) {
      return res
        .status(400)
        .json({ errorMessage: "Email 형식을 확인해주세요." });
    }

    //패스워드 형식 확인
    if (!pwRef.test(password)) {
      return res
        .status(400)
        .json({ errorMessage: "Password 형식을 확인해주세요." });
    }

    console.log(password, confirmpassword);

    // confirmpassword 일치 확인
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "패스워드가 일치하지 않습니다." });
    }

    const users = await this.usersRepository.signupUser(email, nickname, hash);

    return {
      email: users.email,
      nickname: users.nickname,
    };
  };
  // email 중복 확인
  existsEmail = async (email) => {
    const existsEmail = await this.usersRepository.existsEmail(email);

    return existsEmail;
  };
  // 닉네임 중복 확인
  //   existsNickname = async (nickname) => {
  //     const existsNickname = await this.usersRepository.existsNickname(nickname);

  //     return existsNickname;
  //   };

  //로그인

  authLogin = async (email, password, res) => {
    const loginInfo = await this.usersRepository.authLogin(email);

    if (!loginInfo) {
      res.status(400).json({ message: "등록된 Email이 없습니다." });
      return false;
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      loginInfo.password
    );

    if (!isPasswordCorrect) {
      res.status(400).json({ message: "패스워드를 확인해주세요" });
      return false;
    }

    const token = jwt.sign(
      {
        userId: loginInfo.userId,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "12h",
      }
    );

    res.header("Authorization", `Bearer ${token}`);

    return token;
  };
}
