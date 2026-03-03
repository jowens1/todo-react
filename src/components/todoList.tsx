import { useSelector } from "react-redux";
import { TodoInterface } from "../store/todos";
import type { RootState } from "../store/store";


const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)

  const tdList = todos.map((todo: TodoInterface) =>
    <li key={todo.id}>{todo.text}</li>
  )
  return (
    <>
      <div>{"TodoList"}</div>
      <ul>{tdList}</ul>
    </>

  );
};

export default TodoList;
