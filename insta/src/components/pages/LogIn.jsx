import { Link, useNavigate } from "react-router-dom";
import {
  Layout,
  Main,
  Box,
  ImgLogo,
  Form,
  Input,
  BtnSubmit,
  SignUpWrapper,
  FBLogin,
  PasswordReset,
} from "../atoms/login";
import authApis from "../../apis/auth";
import { useState } from "react";
import instance from "../../apis";
import { useSetRecoilState } from "recoil";
import isLoginState from "../../stores/isLoginState";

const LogIn = () => {
  const setIsLogin = useSetRecoilState(isLoginState);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const { userName, password } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changeForm = { ...form, [name]: value };
    setForm(changeForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message, token } = await authApis.LogIn(form);

    if (!success) return alert(message);

    instance.defaults.headers.common["Authorization"] = "Bearer " + token;
    localStorage.token = token;
    setIsLogin(true);
    navigate("/");
  };
  return (
    <Layout>
      <Main>
        <Box>
          <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          <Form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              name="userName"
              value={userName}
              placeholder="전화번호,사용자,이름 또는 이메일"
              required
            />
            <Input
              onChange={handleChange}
              name="password"
              placeholder="비밀번호"
              type="password"
              value={password}
              required
            />
            <BtnSubmit>로그인</BtnSubmit>
          </Form>
          <FBLogin>Facebook으로 로그인</FBLogin>
          <PasswordReset>비밀번호를 잊으셨나요?</PasswordReset>
        </Box>
        <Box>
          <SignUpWrapper>
            계정이 없으신가요? <Link to="/sign-up">가입하기</Link>
          </SignUpWrapper>
        </Box>
      </Main>
    </Layout>
  );
};

export default LogIn;
