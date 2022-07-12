const MyComponent = (props) => {
  return (
    <>
      <h1>
        부모가 물려준 이름은 {props.name}
        <br />
        {props.message}
      </h1>
      {/** 태그 사이의 내용을 보내주는게 children */}
      {props.children}
    </>
  );
};

export default MyComponent;
