import { useState } from "react";
import styled from "styled-components";

const Carousel1 = ({ data }) => {
  const [index, setIndex] = useState(0);
  const handleIndex = (i) => {
    const lastIndex = data.length - 1;

    let nextIndex = i;

    if (i < 0) nextIndex = lastIndex;
    if (i > lastIndex) nextIndex = 0;
    setIndex(nextIndex);
  };

  const handlePage = (i) => {
    setIndex(i);
  };

  return (
    <Container>
      <Images>
        {data.map(({ id, image }, i) => (
          <Image key={id} active={index === i} src={image} />
        ))}
      </Images>
      <BtnLeft onClick={() => handleIndex(index - 1)}>이전</BtnLeft>
      <BtnRight onClick={() => handleIndex(index + 1)}>다음</BtnRight>
      <Pages>
        {data.map(({ id }, i) => (
          <BtnPage key={id} active={index === i} onClick={() => handlePage(i)}>
            {i}
          </BtnPage>
        ))}
      </Pages>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
`;
const Images = styled.div``;
const Image = styled.img`
  position: absolute;
  width: 600px;
  height: 400px;
  top: 0;
  left: 0;
  transition: all 0.5s;
  opacity: ${({ active }) => !active && "0"};
`;

const Btn = styled.button`
  position: absolute;
  top: 50%;
  width: 25px;
  height: 25px;
  text-indent: -89999px;
  border: 2px solid tomato;
  background-color: transparent;
  transform-origin: center top;
  transform: rotate(45deg) translateY(-50%);
  box-sizing: border-box;
  cursor: pointer;
`;
const BtnLeft = styled(Btn)`
  left: 20px;
  border-right: 0;
  border-top: 0;
`;
const BtnRight = styled(Btn)`
  right: 20px;
  border-left: 0;
  border-bottom: 0;
`;

const Pages = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
const BtnPage = styled.button`
  width: 12px;
  height: 12px;
  margin: 0 2px;
  border: 0 none;
  background-color: ${({ active }) => !active && "tomato"};
  border-radius: 50%;
  text-indent: -9999px;
  cursor: pointer;
`;

export default Carousel1;
