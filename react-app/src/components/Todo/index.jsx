import { useRef, useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import List from "./TodoList";

const Todo = () => {
  // 리스트관리
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "할일1",
      checked: true,
    },
    {
      id: 2,
      content: "할일2",
      checked: false,
    },
  ]);

  const nextId = useRef(3);

  const handleAdd = (content) => {
    if (content) {
      const nextItem = [
        ...todos,
        { id: nextId.current, content: content, checked: false },
      ];
      setTodos(nextItem);
      nextId.current += 1;
    }
  };

  const handleDelete = (deleteId) => {
    const deleteItem = todos.filter((todo) => todo.id !== deleteId);
    setTodos(deleteItem);
  };

  const handleChecked = (id) => {
    const nextTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodos(nextTodo);
  };

  return (
    <Layout>
      <Container>
        <Title>일정관리</Title>
        <Form onAdd={handleAdd} />
        <List data={todos} onDelete={handleDelete} onChecked={handleChecked} />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #e9ecef;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 600px;
`;
const Title = styled.div`
  background: #dfb51c;
  color: #fff;
  font-size: 24px;
  text-align: center;
  padding: 10px;
`;

export default Todo;
