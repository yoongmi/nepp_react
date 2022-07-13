import { useState } from "react";

const EventPractice = () => {
  // const [message, setMessage] = useState("");
  // const [username, setusername] = useState("");

  const [form, setForm] = useState({
    username: "",
    username2: "",
    message: "",
  });
  const { username, username2, message } = form;

  const handleClick = () => {
    alert(username + username2 + message);
    setForm({ username: "", username2: "", message: "" });
  };

  const handlekeyUp = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input onChange={handleChange} name="username" value={username} />
      <input onChange={handleChange} name="username2" value={username2} />
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChange}
        value={message}
        onKeyUp={handlekeyUp}
      />
      &nbsp;
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractice;
