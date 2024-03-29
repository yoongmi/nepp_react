import { useEffect, useState } from "react";
import styled from "styled-components";
import Form from "../templates/Book/Form";
import List from "../templates/Book/List";
import { getBooks } from "../../apis";
import Pagination from "../organisms/Pagination";
import { useSearchParams } from "react-router-dom";

const Book = () => {
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({ query: "" });
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const qsQuery = searchParams.get("query");
  const qsPage = searchParams.get("page");

  const { query } = params;

  useEffect(() => {
    if (qsQuery) {
      setParams((prev) => ({ ...prev, query: qsQuery }));
    } else {
      setParams((prev) => ({ ...prev, query: "" }));
      setItems([]);
      setTotal(0);
    }
    if (qsPage) {
      setPage(+qsPage);
    }
  }, [qsQuery, qsPage]);

  useEffect(() => {
    bookList();
  }, [params, page]);

  const bookList = async () => {
    if (!params.query) return;

    //page > start
    const display = 10;
    const start = (page - 1) * display + 1;

    const { items, total } = await getBooks({ ...params, start });
    setItems(items);
    setTotal(total);
    setSearchParams({ query, page });
  };

  const onSubmit = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <>
      <H1>책 검색</H1>
      <Form defaultQuery={qsQuery} onChange={onSubmit} />
      <List data={items} />
      <Pagination
        total={total}
        nowPage={page}
        onChange={(page) => setPage(page)}
      />
    </>
  );
};

const H1 = styled.h1`
  text-align: center;
`;

export default Book;
