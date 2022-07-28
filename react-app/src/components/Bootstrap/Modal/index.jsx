import { useState } from "react";

// 장점1. modal불러올때마다 useState 선언 안해도 됨.
// 장점2. 버튼코드와 모달코드가 가까운 곳에 있음.

// 1.어떤 element를 누르면 모달을 띄울건지
// 2.어떤 modal을 띄울건지

const Modal = ({ activator, content }) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  return (
    <>
      {activator(handleOpen)}
      {show && content(() => setShow(false))}
    </>
  );
};

export default Modal;
