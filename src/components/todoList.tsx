import { TodoItem } from "../types/todo-types";

type Props = {
  todos: TodoItem[];
};
const TodoList = ({ todos }: Props) => {
  const renderTodos = () => {
    return todos.map((todo, index) => <li key={index}>{todo.task}</li>);
  };
  return (
    <div>
      <ul>{renderTodos()}</ul>
    </div>
  );
};

export default TodoList;
