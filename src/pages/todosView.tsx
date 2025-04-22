import { useState } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
import { TodoItem } from "../types/todo-types";

const TodosView = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, { task: newTodo, completed: false }]);
  };

  return (
    <Layout>
      <Container>
        <TodoForm
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          setTodos={handleAddTodo}
        />
      </Container>
      <Container>
        <TodoList todos={todos} />
      </Container>
    </Layout>
  );
};

export default TodosView;
