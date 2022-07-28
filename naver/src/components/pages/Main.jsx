import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <Container>
        <h1>환영합니다</h1>
        <Link to="/movie">
          <BtnLink>영화 검색</BtnLink>
        </Link>
        <Link to="/book">
          <BtnLink>책 검색</BtnLink>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;
const BtnLink = styled.button`
  width: 180px;
  height: 70px;
  font-size: 18px;
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-top: 40px;
`;

export default Main;
