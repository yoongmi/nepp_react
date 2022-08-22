import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const PostsImg = ({ data }) => {
  const imgBox = useRef();
  const [imgSize, setImgSize] = useState();
  const resizehandle = () => {
    setImgSize(imgBox.current.offsetWidth);
  };

  useEffect(() => {
    setImgSize(imgBox.current.offsetWidth);
    window.addEventListener("resize", resizehandle);
    return () => {
      window.removeEventListener("resize", resizehandle);
    };
  }, []);

  const [imgIndex, setImgIndex] = useState(1);
  const handleIndex = (i) => {
    const ImgSize = data.length; //2개
    if (i <= 1) setImgIndex(1);
    if (i >= ImgSize) setImgIndex(ImgSize);
  };

  return (
    <Imgwrap>
      {data.length > 1 && (
        <BtnLeft onClick={() => handleIndex(imgIndex - 1)}>&#60;</BtnLeft>
      )}
      {data.length > 1 && (
        <BtnRight onClick={() => handleIndex(imgIndex + 1)}>&#62;</BtnRight>
      )}
      <Imgbox
        ref={imgBox}
        translateX={(imgIndex - 1) * -imgSize}
        className="img_box"
      >
        {data.map((i) => (
          <Image key={i} src={i} />
        ))}
      </Imgbox>
    </Imgwrap>
  );
};
const Imgwrap = styled.div`
  position: relative;
  background-color: #000;
`;

const Imgbox = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  align-items: center;
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  transition: all 0.4s;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  flex-shrink: 0;
`;

const Btn = styled.span`
  z-index: 10;
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  text-align: center;
  line-height: 27px;
  font-size: 15px;
  color: #666;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  &:active {
    background-color: #eee;
  }
`;
const BtnLeft = styled(Btn)`
  left: 10px;
`;
const BtnRight = styled(Btn)`
  right: 10px;
`;
export default PostsImg;
