const TodoList = () => {
  const tempTodoList = [
    { id: 1, text: "First" }, { id: 2, text: "Second" }, { id: 3, text: "Third" }
  ];
  const tdList = tempTodoList.map((todo) =>
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
