import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as ImgHome } from "../../assets/images/home.svg";
import { ReactComponent as ImgNewPost } from "../../assets/images/new-post.svg";
import ModalNewPost from "./ModalNewPost";

const Header = () => {
  const [modalPost, setModalPost] = useState(false);
  const handleNewPost = () => {
    setModalPost(true);
  };
  return (
    <>
      <Container>
        <Main>
          <LogoWrapper>
            <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </LogoWrapper>
          <Search>
            <Input placeholder="검색" />
          </Search>
          <Nav>
            <Icon>
              <ImgHome />
            </Icon>
            <Icon onClick={handleNewPost}>
              <ImgNewPost />
            </Icon>
          </Nav>
        </Main>
      </Container>
      {modalPost && <ModalNewPost onClose={() => setModalPost(false)} />}
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

const Container = styled.header`
  z-index: 100;
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
const Main = styled.div`
  display: flex;
  max-width: 975px;
  height: 60px;
  margin: 0 auto;
  align-items: center;
  padding: 0 20px;
`;
const LogoWrapper = styled.div`
  flex: 1;
`;
const ImgLogo = styled.img`
  width: 103px;
`;
const Input = styled.input`
  width: 100%;
  background: #efefef;
  border-radius: 10px;
  border: none;
  height: 36px;
  padding-left: 20px;
  box-sizing: border-box;
`;
const Search = styled.div`
  flex: 1;
`;
const Nav = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Icon = styled.div`
  cursor: pointer;
  margin: 0 10px;
`;

const Wrapper = styled.div`
  margin-top: 60px;
  background-color: #fafafa;
  min-height: calc(100vh - 60px);
`;

export default Header;
