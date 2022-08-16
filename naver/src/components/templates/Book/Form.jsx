import { useState } from "react";
import styled from "styled-components";

const Form = ({ onChange }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onChange({ name: "query", value: text });
  };

  const inputHandle = (e) => {
    setText(e.target.value);
  };

  return (
    <Container onSubmit={onSubmit}>
      <Input onChange={inputHandle} value={text} />
      <SubmitBtn>검색</SubmitBtn>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  margin: 20px;
`;
const Input = styled.input`
  flex: 1;
  margin-right: 5px;
`;
const SubmitBtn = styled.button``;

export default Form;
