import styled from "styled-components";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  // 이부분은 중첩라우터로 해결됨.
  // const { pathname } = useLocation();
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   const isMain = pathname === "/";
  //   setShow(!isMain);
  // }, [pathname]);

  // if (!show) return <></>;

  return (
    <>
      <Container>
        <Nav>
          <Link to="/">
            <BtnLink>메인</BtnLink>
          </Link>
          <Link to="/movie">
            <BtnLink>영화</BtnLink>
          </Link>
          <Link to="/book">
            <BtnLink>책</BtnLink>
          </Link>
        </Nav>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.header`
  height: 60px;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
`;
const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;
const BtnLink = styled.button`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  & + & {
    margin-left: 10px;
  }
`;

const Link = styled(NavLink)`
  &.active {
    ${BtnLink} {
      background: #000;
      color: #fff;
    }
  }
`;

export default Header;
