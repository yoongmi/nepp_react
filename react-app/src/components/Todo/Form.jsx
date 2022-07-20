import styled from "styled-components";
import { useRef, useState } from "react";

const Form = ({ onAdd }) => {
  //입력관리

  const input = useRef(null);
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    onAdd(inputText);
    setInputText("");
    input.current.focus();
  };

  const enterClick = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <InputWrapper>
      <Input
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        ref={input}
        onKeyUp={enterClick}
        placeholder="Enter your todolist"
      />
      <BtnSubmit onClick={handleAdd}>+</BtnSubmit>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  height: 40px;
`;
const Input = styled.input`
  flex: 1;
  background: #000;
  color: #fff;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 10px;
`;
const BtnSubmit = styled.button`
  border: none;
  color: #fff;
  font-size: 24px;
  width: 40px;
  background: #868e96;
  cursor: pointer;
`;

export default Form;
