import { useRef } from "react";
import styled from "styled-components";
import useDropdown from "../../hooks/useDropdown";

const Dropdown2 = () => {
  const wrapperEl = useRef(null);

  const [buttonOn, setButtonOn] = useDropdown(wrapperEl);

  return (
    <Wrapper ref={wrapperEl}>
      <Button onClick={() => setButtonOn(!buttonOn)}>Dropdown Button</Button>
      {buttonOn && (
        <List>
          <Item>Action</Item>
          <Item>Another Action</Item>
          <Item>Something else</Item>
        </List>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 20px;
`;
const Button = styled.button`
  background: #198754;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
  line-height: 24px;
`;

const List = styled.div`
  position: absolute;
  top: 40px;
  width: 200px;
  border-radius: 5px;
  padding: 10px 0;
  border: 1px solid #efefef;
  background-color: #fff;
`;
const Item = styled.div`
  cursor: pointer;
  padding: 5px 20px;
  :hover {
    background: #ddd;
  }
`;

export default Dropdown2;
