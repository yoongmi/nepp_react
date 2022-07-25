import styled from "styled-components";
import Accordion from "./Accordion";
import { data1, data2 } from "../datas/accordion";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Bootstrap = () => {
  const [show, setShow] = useState(true);
  return (
    <Layout>
      <button onClick={() => setShow(!show)}>버튼</button>
      <br />
      {show && <Dropdown />}
      <Accordion data={data1} />
      <Accordion data={data2} />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;

export default Bootstrap;
