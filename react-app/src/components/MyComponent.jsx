const MyComponent = ({ name, message, children }) => {
  return (
    <>
      <h1>
        부모가 물려준 이름은 {name}
        <br />
        {message}
      </h1>
      {/** 태그 사이의 내용을 보내주는게 children */}
      {children}
    </>
  );
};

export default MyComponent;
