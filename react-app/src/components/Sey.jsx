import { useState } from "react";

const Say = () => {
  //message는 setMessage를 통해서만 값을 바꿀 수 있음.
  const [message, setMessage] = useState("기본텍스트");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요");
  //color는 setColor를 통해서만 값을 바꿀 수 있음.
  const [color, setColor] = useState("darkblue");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>&nbsp;
      <button onClick={onClickLeave}>퇴장</button>
      {/* 하단의 color는 color:color 축약. */}
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        붉은색
      </button>
      &nbsp;
      <button style={{ color: "gold" }} onClick={() => setColor("gold")}>
        노란색
      </button>
      &nbsp;
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        푸른색
      </button>
    </div>
  );
};

export default Say;
