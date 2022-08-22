import { useEffect, useState } from "react";
import styled from "styled-components";
import PostApis from "../../../apis/post";
import PostsImg from "./PostsImg";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const posts = await PostApis.getPosts();
    setPosts(posts);
    console.log(posts);
  };

  return (
    <List>
      {posts.map(({ id, name, content, images }) => (
        <Item key={id}>
          <Header>
            <Profileimg></Profileimg>
            {name}
          </Header>
          <PostsImg data={images} />
          <Body>
            <b>{name}</b>
            {content}
          </Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  margin-top: 20px;
`;
const Item = styled.article`
  overflow: hidden;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  & + & {
    margin-top: 20px;
  }
`;
const Header = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
`;
const Profileimg = styled.div`
  dispay: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background-color: #ddd;
  border: 1px solid #ccc;
  border-radius: 50%;
`;

const Body = styled.div`
  padding: 15px;
  b {
    display: inline-block;
    margin-right: 10px;
  }
`;

export default Posts;
