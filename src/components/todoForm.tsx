type Props = {
  newTodo: string;
  setNewTodo: (value: string) => void;
  setTodos: () => void;
};

const TodoForm = ({ newTodo, setNewTodo, setTodos }: Props) => {
  return (
    <div className="">
      <label className="justify-items-center">Enter your next task:</label>
      <input
        className="border h-8 rounded indent-2"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button
        type="button"
        className="bg-green-100 rounded-lg hover:bg-green-200 p-1 justify-items-center"
        onClick={setTodos}
      >
        Add task
      </button>
    </div>
  );
};
export default TodoForm;
