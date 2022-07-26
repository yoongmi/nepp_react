import styled from "styled-components";
import Accordion from "./Accordion";
import { data1, data2 } from "../datas/accordion";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Dropdown2 from "./Dropdown2";
import Carousel1 from "./Carousel1";
import images from "../datas/images";

const Bootstrap = () => {
  const [show, setShow] = useState(true);
  return (
    <Layout>
      <Carousel1 data={images} />
      <hr />
      <button onClick={() => setShow(!show)}>버튼</button>
      <br />
      {show && <Dropdown />}
      <Dropdown2 />
      <Accordion data={data1} />
      <Accordion data={data2} />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;

export default Bootstrap;
