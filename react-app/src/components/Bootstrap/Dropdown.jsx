import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const wrapperEl = useRef(null);
  const buttonEl = useRef(null);
  const [buttonOn, setButtonOn] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      if (!wrapperEl.current.contains(e.target)) {
        setButtonOn(false);
      }
      //   if (e.target !== buttonEl.current) {
      //     setButtonOn(false);
      //   }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Wrapper ref={wrapperEl}>
      <Button ref={buttonEl} onClick={() => setButtonOn(!buttonOn)}>
        Dropdown Button
      </Button>
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

export default Dropdown;
