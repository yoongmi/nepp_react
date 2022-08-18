import { useEffect, useState } from "react";
import styled from "styled-components";
import PostApis from "../../../apis/post";

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
          <Header>{id}</Header>
          <Images>
            {images.map((i) => (
              <Image key={i} src={i} />
            ))}
          </Images>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  margin-top: 20px;
`;
const Item = styled.article`
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
`;
const Images = styled.div``;
const Image = styled.img`
  width: 100%;
`;
const Body = styled.div`
  padding: 15px;
`;

export default Posts;
