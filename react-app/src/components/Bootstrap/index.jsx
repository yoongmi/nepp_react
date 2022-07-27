import styled from "styled-components";
import Accordion from "./Accordion";
import { data1, data2 } from "../datas/accordion";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Dropdown2 from "./Dropdown2";
import Carousel from "./Carousel";
import images from "../datas/images";
import ModalName from "./Modal/ModalName";

const Bootstrap = () => {
  const [show, setShow] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState("홍길동");
  return (
    <Layout>
      <div>
        {name}
        <button onClick={() => setModalShow(true)}>이름 바꾸기</button>
      </div>
      {modalShow && (
        <ModalName
          name={name}
          setName={setName}
          onClose={() => setModalShow(false)}
          onChange={(val) => setName(val)}
        />
      )}
      <Carousel data={images} type="fade-in" />
      <hr />
      <Carousel data={images} type="slide" />
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
