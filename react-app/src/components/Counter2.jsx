import { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(7);
  const handleClick = (num) => {
    setNumber(number + num);
  };

  return (
    <>
      <h1>현재 카운터 값은 {number} 입니다.</h1>
      <button onClick={() => handleClick(3)}>+3</button>&nbsp;
      <button onClick={() => handleClick(1)}>+1</button>&nbsp;
      <button onClick={() => handleClick(-1)}>-1</button>&nbsp;
      <button onClick={() => handleClick(-3)}>-3</button>
    </>
  );
};

export default Counter2;
