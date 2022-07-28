import styled from "styled-components";
import Accordion from "./Accordion";
import { data1, data2 } from "../datas/accordion";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Dropdown2 from "./Dropdown2";
import Carousel from "./Carousel";
import images from "../datas/images";
import ModalName from "./Modal/ModalName";
import Modal from "./Modal/index";

const Bootstrap = () => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("홍길동");
  const [nickname, setNickName] = useState("홍길동");
  return (
    <Layout>
      <div>
        {nickname}
        <Modal
          activator={(onOpen) => (
            <button onClick={onOpen}>닉네임 바꾸기</button>
          )}
          content={(onClose) => (
            <ModalName
              name={name}
              setName={setName}
              onClose={onClose}
              onChange={(val) => setNickName(val)}
            />
          )}
        />
      </div>

      <div>
        {name}
        <Modal
          activator={(onOpen) => <button onClick={onOpen}>이름바꾸기</button>}
          content={(onClose) => (
            <ModalName
              name={name}
              setName={setName}
              onClose={onClose}
              onChange={(val) => setName(val)}
            />
          )}
        />
      </div>

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
