import styled from "styled-components";
const List = ({ data }) => {
  return (
    <Container>
      {data.map(({ title, description, link, author, image }) => (
        <Items key={title}>
          <h3>
            <a href={link}>{title}</a>
          </h3>
          <h4>{author}</h4>
          <img src={image} alt={title} />
          <p>{description}</p>
        </Items>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  padding: 0;
  margin: 20px;
`;
const Items = styled.li`
  border-bottom: 1px solid #ddd;
  margin-bottom: 50px;
  list-style: none;
  text-align: center;
  img {
    width: 50%;
    height: auto;
  }
  h3 a {
    color: #000;
    text-decoration: none;
    word-break: keep-all;
  }
  h4 {
    font-size: 10px;
  }
  p {
    overflow: hidden;
    font-size: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export default List;
