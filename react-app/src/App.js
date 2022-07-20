import Jsx from "./components/Jsx";
import InlineStyle from "./components/InlineStyle";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Sey";
import EventPractice from "./components/EventPractice";
import IterationSample from "./components/IterationSample";
import Counter2 from "./components/Counter2";
import Info from "./components/Info";
import Parent from "./components/Parent";
import Counter3 from "./components/Counter3";
import Info2 from "./components/Info2";
import Average from "./components/Average";
import InputFile from "./components/InputFile";
import StyledComponent from "./components/StyledComponent";
import Flex from "./components/Flex";
import Todo from "./components/Todo";

function App() {
  const name1 = "리액트";
  return (
    <>
      <Todo />
      <hr />
      <Flex />
      <StyledComponent />
      <InputFile />
      <hr />
      <Average />
      <Info2 />
      <Counter3 />
      <Parent />
      <Info />
      <Counter2 />
      <hr />
      <IterationSample />
      <hr />
      <EventPractice />
      <Say />
      <Counter />
      <hr />
      <MyComponent name={name1} message="반가워요" />
      <MyComponent name={"뷰"} message="반가워요" />
      <MyComponent name={"앵귤러"}>
        <h1>h1이에요</h1>
        <h5>h5이에요</h5>
      </MyComponent>
      <InlineStyle />
      <Jsx />
    </>
  );
}

export default App;
