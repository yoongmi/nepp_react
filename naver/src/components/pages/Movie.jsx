import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovies } from "../../apis";

const Movie = () => {
  //   useEffect(() => {
  //     //IIFE : 즉시실행함수
  //     (async () => {
  //       const result = getMovies();
  //       console.log(result);
  //     })();
  //   }, []);

  const [items, setItems] = useState([]);
  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    const result = await getMovies();
    setItems(result.items);
    console.log(result.items);
  };

  return (
    <>
      <h1>영화 검색</h1>
      <Form>
        <Input />
        <BtnSearch>검색</BtnSearch>
      </Form>
      <List>
        {items.map(({ title, pubDate, image, link }) => (
          <Item key={link}>
            <Thumbnail src={image} />
            <a href={link} target="_blank" rel="noreferrer">
              <Name>{title}</Name>
            </a>
            <Openday>{pubDate}</Openday>
          </Item>
        ))}
      </List>
    </>
  );
};

const Form = styled.form`
  margin: 20px;
  display: flex;
`;
const Input = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSearch = styled.button``;
const List = styled.div`
  display: grid;
  margin: 20px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.div``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Name = styled.h3`
  word-break: keep-all;
  font-size: 16px;
`;

const Openday = styled.p`
  font-size: 14px;
`;

export default Movie;
