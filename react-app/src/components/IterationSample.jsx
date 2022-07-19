import { useState, useRef } from "react";

const IterationSample = () => {
  //   const names = ["눈사람", "얼음", "눈", "바람", "구름"];
  const nextId = useRef(6);
  const [message, setMessage] = useState("");
  const [names, setNames] = useState([
    { id: 1, text: "얼음" },
    { id: 2, text: "눈" },
    { id: 3, text: "바람" },
    { id: 4, text: "구름" },
    { id: 5, text: "눈사람" },
  ]);
  // const [nextId, setNextId] = useState(6);

  const handleClick = () => {
    if (!message) return;
    const nextNames = [...names, { id: nextId.current, text: message }];
    setNames(nextNames);
    setMessage("");
    nextId.current += 1;
    console.log(nextId.current);
  };

  const handleDelete = (deleteId) => {
    //e는 names의 요소.
    const nextNames = names.filter((e, i) => {
      return e.id !== deleteId;
    });
    setNames(nextNames);
  };

  return (
    <>
      <div>
        <input onChange={(e) => setMessage(e.target.value)} value={message} />
        &nbsp;
        <button onClick={handleClick}>추가</button>
      </div>
      <ul>
        {/* key값 쓰는이유 : key값으로 어떤 원소에 변동이 있었는지 알아내려고 사용 */}
        {names.map(({ id, text }, index) => (
          <li key={id} onDoubleClick={() => handleDelete(id)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IterationSample;
