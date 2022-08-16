import { Link } from "react-router-dom";
import {
  Layout,
  Main,
  Box,
  ImgLogo,
  Form,
  Input,
  BtnSubmit,
  SignUpWrapper,
} from "../atoms/login";
import { useState } from "react";

import authApis from "../../apis/auth";

const SignUp = () => {
  const [form, setForm] = useState({
    user_name: "",
    password: "",
    name: "",
  });

  const { user_name, password, name } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changeForm = { ...form, [name]: value };
    setForm(changeForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authApis.login(form);
  };

  return (
    <Layout>
      <Main>
        <Box>
          <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          <Form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              placeholder="사용자 이름"
              name="user_name"
              value={user_name}
            />
            <Input
              onChange={handleChange}
              placeholder="비밀번호"
              type="password"
              name="password"
              value={password}
            />
            <Input
              onChange={handleChange}
              placeholder="성명"
              name="name"
              value={name}
            />
            <BtnSubmit>가입</BtnSubmit>
          </Form>
        </Box>
        <Box>
          <SignUpWrapper>
            계정이 있으신가요? <Link to="/log-in">로그인</Link>
          </SignUpWrapper>
        </Box>
      </Main>
    </Layout>
  );
};

export default SignUp;
