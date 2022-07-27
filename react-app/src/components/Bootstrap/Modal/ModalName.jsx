import { useState } from "react";
import styled from "styled-components";

const ModalName = ({ onClose, name, onChange }) => {
  const [text, setText] = useState(name);

  const onSubmit = () => {
    onChange(text);
    onClose();
  };
  return (
    <>
      <Backdrop
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            onClose();
          }
        }}
      >
        <ModalContainer>
          <Header>이름 바꾸기</Header>
          <Body>
            <Input
              placeholder="이름을 입력해주세요."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyUp={(e) => {
                e.key === "Enter" && onSubmit();
              }}
            />
          </Body>
          <Footer>
            <BtnClose onClick={onClose}>닫기</BtnClose>
            <BtnSubmit onClick={onSubmit}>저장</BtnSubmit>
          </Footer>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

const Backdrop = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  width: 400px;
  border-radius: 4px;
`;
const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;
const Body = styled.div`
  padding: 15px;
`;
const Input = styled.input`
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;
`;
const Footer = styled.div`
  padding: 15px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
`;
const BtnClose = styled.button`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;
const BtnSubmit = styled.button`
  margin-left: 10px;
  background: #333;
  border: 1px solid #333;
  color: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;

export default ModalName;
