import styled from "styled-components";

const Flex = () => {
  return (
    <Parent>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </Parent>
  );
};

const Parent = styled.div`
  background: darkseagreen;
  height: 600px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 200px;
  height: 100px;
  flex-shrink: 0;
`;

const Box1 = styled(Box)`
  background: orange;
  /* flex-grow: 1; */
`;
const Box2 = styled(Box)`
  background: red;
  height: 200px;
  /* flex-grow: 1; */
`;
const Box3 = styled(Box)`
  background: blue;
  height: 50px;
`;
const Box4 = styled(Box)`
  background: pink;
`;

export default Flex;
