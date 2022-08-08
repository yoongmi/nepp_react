import styled from "styled-components";
import { useState } from "react";
import contries from "../../../datas/contries";

const Form = ({ data, onChange }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange({ name: "query", value: query });
  };

  const handleCountry = (e) => {
    onChange({ name: "country", value: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <select onChange={handleCountry} value={data.country}>
          <option value="all">전체</option>
          {contries.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <Input onChange={(e) => setQuery(e.target.value)} value={query} />
        <BtnSearch>검색</BtnSearch>
      </Container>
    </form>
  );
};

const Container = styled.div`
  margin: 20px;
  display: flex;
`;
const Input = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSearch = styled.button``;
export default Form;
