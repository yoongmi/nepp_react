import { useState } from "react";

const Counter = () => {
  // 배열의 비구조화 할당.
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    //set 함수는 비동기.
    setNumber(number + 1);
    console.log(number);
    //setNumber 함수 실행하기전에 console이 먼저 실행되어
    //화면의 숫자보다 콘솔숫자가 -1
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
