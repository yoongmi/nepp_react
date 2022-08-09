import { useEffect, useState } from "react";
import styled from "styled-components";
import Form from "../templates/Book/Form";
import List from "../templates/Book/List";
import { getBooks } from "../../apis";

const Book = () => {
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({ query: "" });

  useEffect(() => {
    bookList();
  }, [params]);

  const bookList = async () => {
    if (!params.query) return;

    const result = await getBooks(params);
    setItems(result.items);
  };

  const onSubmit = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <>
      <H1>책 검색</H1>
      <Form data={params} onChange={onSubmit} />
      <List data={items} />
    </>
  );
};

const H1 = styled.h1`
  text-align: center;
`;

export default Book;
