import styled from "styled-components";

const FadeinImages = ({ data, index }) => {
  return (
    <Images>
      {data.map(({ id, image }, i) => (
        <Image key={id} active={index === i} src={image} />
      ))}
    </Images>
  );
};

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

export default FadeinImages;
