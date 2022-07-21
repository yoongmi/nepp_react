import styled from "styled-components";
import { useState } from "react";

const Form = ({ onAdd }) => {
  //입력관리

  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    onAdd(inputText);
    setInputText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          name="query"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          placeholder="Enter your todolist"
          required
        />
        <BtnSubmit onClick={handleAdd}>+</BtnSubmit>
      </InputWrapper>
    </form>
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
