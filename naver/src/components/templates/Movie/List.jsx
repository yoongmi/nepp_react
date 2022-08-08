import styled from "styled-components";

const List = ({ data }) => {
  return (
    <Items>
      {data.map(({ title, pubDate, image, link }) => (
        <Item key={link}>
          <Thumbnail src={image} />
          <a href={link} target="_blank" rel="noreferrer">
            <Name dangerouslySetInnerHTML={{ __html: title }} />
          </a>
          <Openday>{pubDate}</Openday>
        </Item>
      ))}
    </Items>
  );
};

const Items = styled.div`
  display: grid;
  margin: 20px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.div``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Name = styled.p`
  word-break: keep-all;
  font-size: 16px;
`;

const Openday = styled.p`
  font-size: 14px;
`;

export default List;
