import styled from "styled-components";

const SlideImage = ({ data, index }) => {
  return (
    <Images translateX={index * -600}>
      {data.map(({ id, image }) => (
        <Image key={id} src={image}></Image>
      ))}
    </Images>
  );
};
const Images = styled.div`
  display: flex;
  height: 100%;
  transition: all 0.5s;
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
`;
const Image = styled.img`
  width: 600px;
  height: 400px;
  flex-shrink: 0;
`;

export default SlideImage;
